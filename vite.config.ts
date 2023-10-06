/// <reference types="vitest" />
import { mergeConfig, UserConfigExport } from "vite"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath, URL } from "url"

const viteConfig: UserConfigExport = {
  plugins: [react()],
  server: {
    port: 3010,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import 'src/theme/scss/colors.scss';@import 'src/theme/scss/spacing.scss';@import 'src/theme/scss/typography.scss';@import 'src/theme/scss/shadows.scss';",
      },
    },
  },
}

// https://vitejs.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
    },
  })
)
