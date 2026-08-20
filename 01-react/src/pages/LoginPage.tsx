// PAGE: форма входа. Роут: /login. Родительский layout: AuthLayout.
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
// когда поставишь react-router — раскомментируй:
// import { useNavigate } from "react-router";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // TODO: проверка «не пусто»
        // TODO: localStorage.setItem("auth", "1") — простая «сессия»
        // TODO: navigate("/catalog")
        // пока можно console.log(login, password) чтобы увидеть, что submit живой

        setLogin("");
        setPassword("");
      }}
    >
      <label htmlFor="input-login">Login</label>
      <input
        type="text"
        name="login"
        id="input-login"
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
      />

      {/* TODO: такой же блок для password:
          label + input type="password"
          value={password}
          onChange → setPassword
      */}

      {/* TODO: <button type="submit">Войти</button> */}
    </form>
  );
}
