// Экран /login. Рамка: AuthLayout. Почему page — это URL, не «кусок формы как действие».
//
// EXPORT default. React.lazy ждёт module.default. Два пути — оба рабочие:
//   А) lazy(() => import("./LoginPage"))
//   Б) lazy(() => import("…/pages/login").then((m) => ({ default: m.LoginPage })))
// Имя файла / URL на split не влияют. Миф «назови Login иначе сломается» — миф.
//
// Vue мозг → React:
//   v-model="login"     → value={login} + onChange={(e) => setLogin(e.target.value)}
//   @submit.prevent     → onSubmit={(e) => { e.preventDefault(); … }}
//   router.push('/…')   → navigate('/…') из useNavigate()
//
// Что сделать руками (по порядку):
// 1) добий поле password (у тебя уже есть state — нет input)
// 2) на submit: если login/password не пустые → navigate("/catalog")
//    (фейк-auth: без бэка; можно записать localStorage.setItem("auth", "1"))
// 3) AuthLayout остаётся рамкой, сюда только форма
//
// НЕ делай тут сайдбар / каталог / 404 — это другие файлы.

import { useState } from "react";
import { useNavigate } from "react-router";

import { session } from "#/app/guards/Session";
import { routes } from "#/app/routes";
// когда поставишь react-router — раскомментируй:
// import { useNavigate } from "react-router";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [login, setLogin] = useState("admin");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function fakeLogin(login: string, pass: string) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const state = login === "admin" && pass === "123123";

    return { ok: Boolean(state) };
  }

  return (
    <form
      className={styles.card}
      onSubmit={async (event) => {
        event.preventDefault();
        const result = await fakeLogin(login, password);
        if (result.ok === false) {
          console.log("false");

          return;
        }

        session.set();
        console.log("OK", "REDIRECT");
        await new Promise((resolve) => setTimeout(resolve, 400));
        navigate(routes.adminPanel);
      }}
    >
      <div>
        <h3 className={styles.h3}>Auth</h3>
        <div className={styles.fields}>
          <div className={styles.group}>
            <label htmlFor="input-login">логин </label>
            <input
              type="text"
              name="login"
              id="input-login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="input-password">password</label>
            <input
              type="text"
              name="password"
              id="input-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
      </div>

      <button type="submit">Войти</button>
    </form>
  );
}
