import typescript from "rollup-plugin-typescript2";

export default {
  entry: "./src/index.ts",

  plugins: [typescript()],

  output: [
    {
      file: "dist/vue-simple-icons.umd.js",
      format: "umd",
      name: "vueSimpleIcons"
    },
    {
      file: "dist/vue-simple-icons.esm.js",
      format: "esm",
      name: "vueSimpleIcons"
    }
  ]
};
