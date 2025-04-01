import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin(),solidPlugin()],
  build: {
    target: "esnext",
    lib: {
      entry: "src/index.js", // 👈 指定组件库的入口
      name: "ArWalletKit-Soildjs",
      formats: ["es", "cjs"], // 👈 生成 ESM 和 CJS 两种格式
      fileName: (format) => format == "es" ? "index.mjs" : "index.js",
    },
    outDir: "dist",
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "SolidJS",
        },
      },
    },
  },
  server: {
    allowedHosts: true
  }
});
