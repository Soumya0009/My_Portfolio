import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output folder for the production build
  },
  base: "./", // Use relative paths for assets (important for Netlify or subdirectory deployment)
  server: {
    historyApiFallback: true, // SPA fallback
    port: 3000, // Custom dev server port
  },
  optimizeDeps: {
    include: ["jodit"], // Optimize specific dependencies
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for cleaner imports
    },
  },
});
