import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // ✅ Ensures Vitest can render JSX
    globals: true,
    setupFiles: "./src/setupTests.js", // ✅ Ensures Jest DOM matchers work
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
