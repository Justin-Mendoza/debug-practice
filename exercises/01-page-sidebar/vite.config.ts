import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `root` points at this exercise folder so each app runs on its own port while
// sharing the single node_modules install at the repo root.
const here = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: here,
  plugins: [react()],
  server: { port: 5101, open: true },
  build: { outDir: "dist" },
});
