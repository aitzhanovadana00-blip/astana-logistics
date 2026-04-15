import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

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

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
