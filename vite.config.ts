import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [react()],
    base: isDev ? "" : "https://saratonite.github.io/resume",
  };
});
