# Design System Theme

This document outlines the core visual theme for our design system, reflecting a professional and accessible aesthetic.

## Color Palette
The theme utilizes a `light` color mode.

### Brand Colors
- **Primary Color:** `#0A2463` - A deep navy blue, used for primary actions, branding, headings, and key interactive elements.
- **Accent Color:** `#3E92CC` - A vibrant sky blue, used for gradients, secondary accents, and hover states.
- **Neutral Color:** `#F8F9FA` - A very light grey, serving as a clean base for backgrounds and surfaces.

### Surface Colors
- **Background:** `#F8F9FA`
- **Card Background:** `#FFFFFF`
- **Surface Container:** `#EDEEEF`
- **Surface Container Low:** `#F3F4F5`

### Text Colors
- **Primary Text:** `#191C1D`
- **Secondary Text:** `#434653`
- **Muted Text:** `#737784`

### Border & Outline
- **Border Card:** `#C3C6D5`
- **Border Nav:** `#E1E3E4`
- **Outline Variant:** `#C3C6D5`

## Typography
Our typography system is designed for clarity and readability across all content.
- **Headlines:** `Plus Jakarta Sans` - A modern, geometric sans-serif for striking headings.
- **Body Text:** `Inter` - A highly readable and versatile sans-serif for general text.
- **Labels:** `Inter` - Consistent with body text for clear and functional labels.
- **Hero Watermark:** `BebasNeue` - Used for decorative watermark text.

## Shape and Form
- **Cards:** `rounded-2xl` / `rounded-3xl` - Generous rounding for modern feel.
- **Buttons:** `rounded-xl` - Softer button edges.
- **Inputs:** `rounded-xl` - Consistent with button rounding.
- **Images:** `rounded-3xl` - Large radius for gallery and hero images.

## Spacing
- **Section Padding:** `py-32` - Generous vertical spacing between sections.
- **Container Max Width:** `max-w-7xl` (1280px) with `px-8` padding.
- **Card Padding:** `p-8` for service cards.
- **Grid Gaps:** `gap-6` for card grids, `gap-12` for layout grids.

---

# Полный редизайн Astana Logistics

## Общее направление
- **Стиль**: Корпоративный / Чистый
- **Палитра**: Синий `#0A2463` + голубой `#3E92CC`, фон `#F8FAFC`, карточки `#FFFFFF`
- **Текст**: `#1E1B18` (основной), `#64748B` (вторичный)
- **Границы**: `#E2E8F0`
- **Шрифты**: Inter (body), QueenOfClubs (hero заголовок), BebasNeue (watermark)

## Компоненты

### Header
- Белый фон, нижняя граница `#E2E8F0`
- Логотип слева: "ASTANA" (bold, `#0A2463`) + "LOGISTICS" (light, `#3E92CC`)
- Навигация справа: Услуги, Логистика, FAQ, Контакты
- Мобильный бургер-меню сохраняется
- Переключатели языка и темы остаются

### Hero
- Полноэкранный градиент `#0A2463` → `#1a3a7a` → `#3E92CC` с декоративной графикой:
  - Абстрактные геометрические фигуры (полупрозрачные круги, линии, точки)
  - Тонкая сетка/grid-паттерн на фоне для глубины
  - Лёгкие светящиеся акценты (glow-эффекты)
- Водяной знак "LOGISTICS" — полупрозрачный, BebasNeue
- Крупный заголовок "ГРУЗОПЕРЕВОЗКИ / ДЛЯ ВАШЕГО БИЗНЕСА" по центру
- Подзаголовок — описание компании
- Белая кнопка CTA "ОСТАВИТЬ ЗАЯВКУ" → якорь #form
- Блок статистики: 500+ доставок, 24/7 поддержка, 50+ городов

### Services (Услуги)
- Фон `#F8FAFC`
- Заголовок секции + подзаголовок по центру
- 3 белые карточки в ряд, `border-radius: 10px`, тень, граница `#E2E8F0`
- Каждая: иконка (градиентный квадрат), название, описание
- Hover: подъём + усиленная тень

### Gallery (Галерея)
- Фон белый
- Заголовок + подзаголовок
- Сетка 3 колонки, `border-radius: 8px`, `aspect-ratio: 4/3`
- Hover: лёгкий зум
- Существующие фото сохраняются

### Advantages (Преимущества)
- Фон `#F8FAFC`
- Сетка 2 колонки, карточки с нумерованными бейджами
- Бейдж: градиент `#0A2463` → `#3E92CC`, `border-radius: 6px`
- Белый фон карточки, граница `#E2E8F0`
- Увеличенный текст: заголовок `16-18px`, описание `13-14px` (крупнее остальных секций)

### ContactForm (Форма)
- Фон белый
- Контейнер формы: `#F8FAFC`, `border-radius: 12px`, граница
- Поля: белый фон, граница, `border-radius: 6px`
- Кнопка: градиент `#0A2463` → `#3E92CC`, белый текст, полная ширина
- Floating labels сохраняются

### FAQ
- Фон `#F8FAFC`
- Белые карточки-аккордеоны, `border-radius: 8px`, граница
- Шеврон для раскрытия/закрытия
- Максимальная ширина ~520px по центру

### Contacts (Контакты)
- Фон белый
- 3 карточки: Телефон, WhatsApp, Telegram
- Круглые иконки с цветным фоном (синий, зелёный, синий)
- `#F8FAFC` фон карточки, `border-radius: 10px`

### Footer
- Фон `#0A2463`
- Логотип, навигация, копирайт
- Текст: белый + полупрозрачный

## Что НЕ меняется
- Структура страниц и роутинг (Next.js App Router)
- i18n (ru/kz) — все переводы сохраняются
- Тёмная тема — обновить CSS-переменные под новый дизайн
- API `/api/submit` — без изменений
- Страницы `/logistics` и `/privacy` — обновить стили в соответствии с новым дизайном

## Порядок секций на главной
1. Header
2. Hero
3. Services
4. Gallery
5. Advantages
6. ContactForm
7. FAQ
8. Contacts
9. Footer

## Файлы для изменения
- `src/app/globals.css` — обновить CSS-переменные, анимации
- `src/components/Header.tsx` — новый стиль хедера
- `src/components/Hero.tsx` — градиент вместо фото, статистика
- `src/components/Services.tsx` — новые карточки с иконками
- `src/components/Gallery.tsx` — обновить стили сетки
- `src/components/Advantages.tsx` — нумерованные карточки 2 колонки
- `src/components/ContactForm.tsx` — обновить стили формы
- `src/components/FAQ.tsx` — обновить стили аккордеона
- `src/components/Contacts.tsx` — новые карточки контактов
- `src/components/Footer.tsx` — тёмно-синий футер
