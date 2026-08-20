import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // При pnpm dev сам откроет браузер (обычно Chrome, если он дефолт на Маке)
    open: true,
  },
});
