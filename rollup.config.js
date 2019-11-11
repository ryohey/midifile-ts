import ts from "@wessberg/rollup-plugin-ts"

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [ts()]
}
