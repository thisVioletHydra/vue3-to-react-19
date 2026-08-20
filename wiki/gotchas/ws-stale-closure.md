# WebSocket и stale closure

## В чём проблема

`socket.onmessage = () => setItems([...items, msg])` закрывается на `items` того рендера, где повесили слушатель. Приходит 10 сообщений — каждое пишет поверх старого снимка. Во Vue `items.value` в колбэке свежий; здесь нужен updater или ref.

Strict Mode в dev монтирует эффект дважды: без cleanup — два сокета.

## Как не делать

- Копировать `items` из замыкания в `onmessage`.
- Открывать WS вне `useEffect`.
- Не закрывать сокет в cleanup.

## Как надо

`setItems((prev) => [...prev, msg].slice(-N))`. Подписка только в effect + `return () => socket.close()`. Актуальный колбэк — через `useRef`, если обработчик стабильный на сокете. См. [stale-closure](stale-closure.md), [strict-mode-double-effect](strict-mode-double-effect.md).
