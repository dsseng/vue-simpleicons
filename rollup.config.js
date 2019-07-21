import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "./src/index.ts",

    plugins: [typescript(), uglify()],

    output: [
      {
        file: "dist/vue-simpleicons.umd.js",
        format: "umd",
        name: "vueSimpleIcons"
      }
    ]
  },
  {
    input: "./src/index.ts",

    plugins: [typescript()],

    output: [
      {
        file: "dist/vue-simpleicons.esm.js",
        format: "esm",
        name: "vueSimpleIcons"
      }
    ]
  }
];
