const SESSION_KEY = "session";
const SESSION_ON = "1";

export class Session {
  get() {
    return localStorage.getItem(SESSION_KEY);
  }

  set() {
    localStorage.setItem(SESSION_KEY, SESSION_ON);
  }

  clear() {
    localStorage.removeItem(SESSION_KEY);
  }

  has() {
    return this.get() === SESSION_ON;
  }
}

export const session = new Session();
