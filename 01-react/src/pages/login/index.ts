// PUBLIC API страницы login.
// Снаружи: import { LoginPage } from "../pages/login"
//
// Почему так, а не export { LoginPage } из ui:
//   index.ts = дверь слайса. Завтра ui переедет — импорты снаружи не трогаешь.
//
// Почему re-export default as named:
//   внутри ui — default (под lazy, вариант А в router.tsx)
//   снаружи — named, чтобы не смешивать «какой default у папки»
//
// Lazy через эту дверь (вариант Б):
//   lazy(() => import("../pages/login").then((m) => ({ default: m.LoginPage })))
// Lazy напрямую в ui (вариант А, короче):
//   lazy(() => import("../pages/login/ui/LoginPage"))
// Прямой импорт ui ломает «только через index» — для лени ок как исключение,
// либо оставь вариант Б и не дырявь слайс.

export { default as LoginPage } from "./ui/LoginPage";
