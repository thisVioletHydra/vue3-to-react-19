import type { CSSProperties } from "react";

export const PEOPLE = [
  { id: "u1", name: "Анна" },
  { id: "u2", name: "Борис" },
  { id: "u3", name: "Вика" },
] as const;

export function swatchStyle(color: string): CSSProperties {
  return { "--swatch": color } as CSSProperties;
}

export function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function waitValue(ms: number, text: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, ms);
  });
}
