# WebSocket

## Зачем

Orderbook, статусы транзакций, события платформы — в вакансии real-time. HTTP+Query для снимков и мутаций; WS — поток событий. Во Vue был бы composable с `onUnmounted` cleanup. Здесь — хук + cleanup в `useEffect`.

## Как не делать

- Открыть WS в теле рендера без эффекта.
- Забыть cleanup → утечки в Strict Mode (двойной mount).
- Пихать каждый тик в Query cache как будто это REST.
- Читать `items` из замыкания в `onmessage` и затирать список. См. [ws-stale-closure](../gotchas/ws-stale-closure.md).

## Как надо

`useWsChannel(url, onEvent)`: connect в effect, abort/close в cleanup, `setState(prev => ...)`. В dev — MockWebSocket / интервал, контракт сообщений тот же. Reconnect — простая политика (backoff), не кластер.

## Шаги

1. Смена B: мок, который шлёт JSON раз в N мс.
2. Хук с cleanup; в Strict Mode нет двойных «вечных» соединений.
3. Лента 20 строк + обновление chart.
4. Смена «канала» / unmount — сокет закрыт.
