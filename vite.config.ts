import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: 'import { jsx } from "@emotion/react"',
  },
  plugins: [reactRefresh(), macrosPlugin()],
  define: {
    'process.env': {},
  },
})
