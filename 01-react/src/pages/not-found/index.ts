// PUBLIC API 404. Снаружи: import { NotFoundPage } from "../pages/not-found"
//
// 404 часто НЕ lazy: чанк на ошибку качается в самый неудачный момент.
// Можно сразу static import в router — так и сделано сейчас.
// Если всё же lazy — те же два варианта, что у login (см. app/router.tsx).

export { default as NotFoundPage } from "./ui/NotFoundPage";
