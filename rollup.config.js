import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",

  plugins: [typescript()],

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
