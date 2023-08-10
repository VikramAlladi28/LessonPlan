import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import packageJSON from './package.json'

export default [
  {
    input: './src/main.js',
    output: [
      {
        dir: packageJSON.main,
        format: 'cjs',
      },
      {
        dir: packageJSON.module,
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
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react', '@babel/preset-env'],
      }),
      external(),
      resolve(),
      terser(),
    ],
    external: [
      'react',
      'react-dom',
      'react-draft-wysiwyg',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
]
