import ts from "rollup-plugin-ts"

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [ts()],
}
