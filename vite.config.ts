import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Trending_Motion_Agency/", // 👈 Important for GitHub Pages
});
