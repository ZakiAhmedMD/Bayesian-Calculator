/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: `base` MUST match the GitHub repository name exactly (case-sensitive,
// keep the trailing slash). The project site is served from
// https://<owner>.github.io/Bayesian-Calculator/ — a wrong/missing base makes
// every asset 404 and the page renders blank.
export default defineConfig({
  base: "/Bayesian-Calculator/",
  plugins: [react()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
