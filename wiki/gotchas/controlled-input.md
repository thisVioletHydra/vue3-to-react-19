# Контролируемый инпут vs нет

## В чём проблема

В React инпут либо полностью под React (`value` + `onChange`), либо полностью свой (`defaultValue`, без `value`). Vue `v-model` это прячет. Пустой инпут — строка `''`, не `null` и не «пропа нет».

Если `value` сначала `undefined`, потом строка — React орёт: компонент сменил uncontrolled на controlled.

## Как не делать

- `<input value={name} />` где `name: string | undefined` и в начале `undefined`.
- `value={null}`.
- Смешать: то `value`, то убрать проп.
- Эффект «следить за инпутом» вместо `onChange`.

## Как надо

Всегда строка: `value={name}` и `name` это `string`, пустое — `''`. Если значение может прийти пустым извне: `value={name ?? ''}`. Uncontrolled — только если сам инпут владеет текстом и тебе не нужен каждый символ в стейте, тогда `defaultValue`, без `value`.
