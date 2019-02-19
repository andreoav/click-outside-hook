import camelCase from 'lodash.camelcase';
import json from 'rollup-plugin-json';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';

const pkg = require('./package.json'); // tslint:disable-line

const libraryName = 'typescript-starter';

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    external(),
    json(),
    typescript({
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
    resolve(),
    sourceMaps(),
    filesize(),
  ],
};
