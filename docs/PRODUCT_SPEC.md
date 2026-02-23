# AvaxLens — Product Specification

> Какие фичи показываем, какие метрики отображаем

---

## Методология

### Как определяли метрики

**Шаг 1:** Вопросы разработчика (что он хочет знать?)
- "Контракт живой?" → tx volume, success rate
- "Сколько плачу за газ?" → avg gas
- "Почему фейлится?" → decoded errors
- "Кто юзает?" → unique callers

**Шаг 2:** Анализ конкурентов

| Платформа | Фокус | Gap для AvaxLens |
|-----------|-------|------------------|
| Explorer | Список txs | Слишком низко, нет агрегации |
| Tenderly | Debugging | $50+/mo, сложно |
| Dune | SQL queries | Нужен SQL, не real-time |

**Вывод:** Разрыв между Explorer и Tenderly — нужен бесплатный, визуальный, моментальный

**Шаг 3:** Проверка API возможностей

| API | Лимит | Доступно |
|-----|-------|----------|
| Routescan | 5 req/sec | Tx data, txs count |
| Snowtrace | 5 req/sec | ABI, contract info |
| Avalanche RPC | ~10 req/sec | Direct calls |

---

## Контракты для тестирования

| Protocol | Address | Category | Status |
|----------|---------|----------|--------|
| Trader Joe | `0x60aE616a2155Ee3d9A68541Ba4544862310933d4` | DEX | Verified |
| Pangolin | `0xE54Ca86531e17Ef3616d22Ca28b0D86bC2b4f3dF` | DEX | Verified |
| GMX | `0x9ab2De34A33f710D1a921aBb06f9093fEFeC4d6b` | Perpetuals | Verified |
| Benqi | `0x486Af40119B0cf6c91F560d4B0B8f4A3A7C2E5B1` | Lending | Verified |

---

## MVP Метрики (Mar 9)

### 1. Contract Overview

| Метрика | Описание | Источник |
|---------|----------|----------|
| **Contract Name** | Имя из ABI | Snowtrace |
| **Address** | C-Chain адрес (0x...) | Input |
| **Creation Date** | Дата деплоя | Snowtrace |
| **Verification** | Верифицирован или нет | Snowtrace |
| **Total Transactions** | Всего транзакций | Routescan |
| **Success Rate** | % успешных txs | Routescan |
| **Avg Gas** | Средний gas за tx | Routescan |

### 2. Transaction Volume Chart

- **Тип:** Area chart (Recharts)
- **Периоды:** 7d / 30d / 90d toggle
- **Данные:** Tx count per day
- **Взаимодействие:** Hover → точное число

### 3. Success/Fail Trend

- **Тип:** Stacked area chart
- **Данные:** Success vs Failed over time
- **Цвета:** Green / Red

### 4. Function Breakdown

| Колонка | Описание |
|---------|----------|
| Function | Имя из ABI (e.g., `swap(uint256,address,uint256,uint256)`) |
| Calls | Всего вызовов |
| % | Доля от всех вызовов |
| Success Rate | % успешных |

- Макс 20 строк
- Сортировка по любой колонке

### 5. Error Log

| Колонка | Описание |
|---------|----------|
| Error | Декодированная причина (если есть ABI) |
| Count | Сколько раз |
| Last Seen | Когда последний раз |
| Function | Какая функция |

---

## Расширенные Метрики (Mar 19)

### 6. Caller Analytics

| Колонка | Описание |
|---------|----------|
| Address | Адрес |
| Calls | Всего вызовов |
| % | Доля |
| First Seen | Первый раз |
| Last Seen | Последний раз |

### 7. Gas Analytics

- Средний / медиана / P95 gas
- Gas trend over time

---

## UI Компоненты

### Address Input
- Валидация: 42 символа, 0x prefix
- Авто-формат
- Ошибки: "Invalid Avalanche address"
- История: localStorage

### Loading States
- Skeleton screens
- Progress bar
- "Fetching data..."

### Error States
- "Contract not found"
- "No transactions"
- "API rate limit"
- Network errors

### Mobile
- Single column
- Charts scrollable
- Collapsible sections

---

## Что НЕ показываем в MVP

- Caller analytics (нужна пагинация, убьёт лимиты)
- 90d trends (без бэкенда медленно)
- Gas profiler как Tenderly (overkill)
- Contract simulation

---

## Edge Cases

1. **Невалидный адрес** → показываем ошибку валидации
2. **Неизвестный контракт** → показываем "No contract found"
3. **Нет транзакций** → показываем "No transactions yet"
4. **Контракт не верифицирован** → показываем raw data, без ABI
5. **Rate limit** → кэшируем, показываем "Try again later"

---

## API Caching Strategy

| Данные | Cache Time | Причина |
|--------|------------|---------|
| ABI | Permanent | Контракты не меняются |
| Contract Info | 5 min | Меняется редко |
| Tx List | 1 min | Реальное время |
| Aggregated Stats | 5 min | Не нужно live |

---

## Tech Stack

- **Next.js 15** — app framework
- **Tailwind CSS** — styling
- **Recharts** — charts
- **viem** — Avalanche RPC
- **Routescan API** — transactions
- **Snowtrace API** — ABI + contract info
