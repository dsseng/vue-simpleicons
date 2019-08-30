import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "./src/index.ts",

  plugins: [typescript(), resolve()],

  output: [
    {
      file: "dist/vue-simpleicons.umd.js",
      format: "umd",
      name: "vueSimpleIcons"
    },
    {
      file: "dist/vue-simpleicons.esm.js",
      format: "esm",
      name: "vueSimpleIcons"
    }
  ]
};
