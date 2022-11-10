import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      // название библиотеки
      name: "react-lib",
      // форматы генерируемых файлов
      formats: ["es", "umd"],
      // названия генерируемых файлов
      fileName: (format) => `react-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
})
