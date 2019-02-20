import json from 'rollup-plugin-json';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';

const pkg = require('./package.json'); // tslint:disable-line

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'auto' },
    { file: pkg.module, format: 'es', sourcemap: true, exports: 'named' },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    external(),
    json(),
    resolve(),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      // useTsconfigDeclarationDir: true,
    }),
    commonjs(),
    sourceMaps(),
    filesize(),
  ],
};
