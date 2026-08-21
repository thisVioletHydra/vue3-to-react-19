import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules } from "vite-css-modules";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [
    patchCssModules({
      generateSourceTypes: true,
      declarationMap: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "#": srcDir,
    },
  },
  server: {
    // При pnpm dev сам откроет браузер (обычно Chrome, если он дефолт на Маке)
    open: true,
  },
});
