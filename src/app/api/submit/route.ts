import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
// Accept either TELEGRAM_CHAT_IDS (comma-separated) or fall back to single TELEGRAM_CHAT_ID
const TELEGRAM_CHAT_IDS = (
  process.env.TELEGRAM_CHAT_IDS ?? process.env.TELEGRAM_CHAT_ID ?? ""
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const ipRequests = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (entry && now < entry.resetAt) {
    if (entry.count >= 5) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    entry.count++;
  } else {
    ipRequests.set(ip, { count: 1, resetAt: now + 3600_000 });
  }

  const body = await request.json();
  const {
    name,
    phone,
    cargoType,
    volume,
    addressFrom,
    addressTo,
    datetime,
    description,
    outsourcing,
    locale,
  } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone required" }, { status: 400 });
  }

  const cargoLabels: Record<string, string> = {
    furniture: "Мебель",
    appliances: "Техника",
    pallets: "Паллеты",
    warehouse: "Складские остатки",
    other: "Другое",
  };

  const formattedDatetime = datetime
    ? new Date(datetime).toLocaleString("ru-KZ", { timeZone: "Asia/Almaty" })
    : null;

  const message = [
    outsourcing ? `🧭 *Заявка на аутсорсинг логистики*` : `📋 *Новая заявка*`,
    ``,
    `*Имя:* ${name}`,
    `*Телефон:* ${phone}`,
    cargoType ? `*Тип груза:* ${cargoLabels[cargoType] ?? cargoType}` : "",
    volume ? `*Объём:* ${volume}` : "",
    addressFrom ? `*Откуда:* ${addressFrom}` : "",
    addressTo ? `*Куда:* ${addressTo}` : "",
    formattedDatetime ? `*Дата/время:* ${formattedDatetime}` : "",
    description ? `*Описание:* ${description}` : "",
    `*Язык:* ${locale ?? "ru"}`,
    `*Отправлено:* ${new Date().toLocaleString("ru-KZ", { timeZone: "Asia/Almaty" })}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (TELEGRAM_CHAT_IDS.length === 0) {
    return NextResponse.json({ error: "No chat IDs configured" }, { status: 500 });
  }

  // Send to all chats in parallel; succeed if at least one delivered
  const results = await Promise.allSettled(
    TELEGRAM_CHAT_IDS.map((chatId) =>
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }).then(async (r) => {
        if (!r.ok) {
          const errText = await r.text().catch(() => "");
          throw new Error(`chat ${chatId}: ${r.status} ${errText}`);
        }
        return chatId;
      })
    )
  );

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length > 0) {
    console.error(
      "Telegram delivery failures:",
      failed.map((r) => (r as PromiseRejectedResult).reason?.message ?? r)
    );
  }

  // Return success if at least one delivery succeeded
  const anyOk = results.some((r) => r.status === "fulfilled");
  if (!anyOk) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
