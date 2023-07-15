#!/usr/bin/env node

const vite = require('vite');
const dts = require('vite-plugin-dts');
const path = require('node:path');
const react = require('@vitejs/plugin-react');

const currentWorkingPath = process.cwd();
const { src, name, peerDependencies } = require(path.join(
  currentWorkingPath,
  'package.json'
));

const inputPath = path.join(currentWorkingPath, src);

console.log([...Object.keys(peerDependencies)]);
const config = vite.defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, inputPath),
      name: name,
      formats: ['cjs', 'esm'],
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: peerDependencies
        ? [...Object.keys(peerDependencies)]
        : undefined,
    },
  },
});

async function builder() {
  await vite.build(config);
}

builder();
