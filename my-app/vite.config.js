import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/netanelwallach/TechTroop-FullStackMay2026-QuickNotes-Project.git",
});
