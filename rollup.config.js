import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: './src/main.js',
    output: [
      {
        dir: 'dist/index.js',
        format: 'cjs',
      },
      {
        dir: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      terser(),
    ],
    external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
]
