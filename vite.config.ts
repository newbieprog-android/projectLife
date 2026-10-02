import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        packhappens: path.resolve(__dirname, "packhappens/index.html"),
        packhappensPrivacy: path.resolve(__dirname, "packhappens/privacy.html"),
        packhappensTerms: path.resolve(__dirname, "packhappens/terms.html"),
        timepurse: path.resolve(__dirname, "timepurse/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
