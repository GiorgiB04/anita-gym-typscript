import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // თუ გინდა დამატებითი alias-ები, მაგ:
      // "@scenes": path.resolve(__dirname, "./src/scenes"),
      // "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});