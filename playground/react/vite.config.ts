import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  mode: 'development',
  plugins: [
    react(),
    styleImport({
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: '@sreworks/components',
          resolveStyle: (name) => {
            return `@sreworks/components/es/${name}/style/index.less`
          },
        },
      ],
    }),
  ],
  build: {
    // to make tests faster
    minify: false,
  },
})
