# React Hook Form

## Зачем

Сложные формы в вакансиях отдельной строкой. Не `useState` на каждое поле. Регистрация полей, ошибки, submit. Во Vue часто `v-model` на всю форму в одном объекте — здесь либа держит значения и ререндерит меньше.

## Как не делать

- `useState` на title, price, description по отдельности.
- Доставать значения через `ref` ребёнка. См. [child-no-return](../gotchas/child-no-return.md).
- Копировать проп в стейт и синхронизировать эффектом. См. [props-to-usestate](../gotchas/props-to-usestate.md).
- Formik как основной путь — в этом курсе нет.

## Как надо

`useForm` + `register` или `Controller`. Submit → `useMutation`. Смена карточки edit — `key={itemId}` на форме. Валидация — Zod, не каша if в `onSubmit`.

## Шаги

1. День 4: `pnpm add react-hook-form`.
2. Форма create: два-три поля, без локального стейта на каждое.
3. Ошибки под полями после submit.
4. Edit той же формой с `key={id}`. Открыл другую карточку — поля сбросились без эффекта.
