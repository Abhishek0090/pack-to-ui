import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist", // build folder name
    format: "es", // format of es
    name: "pack-to-ui", // name should be same as package.json name
  },
  external: ["react", "react-dom"], // package depend on
  plugins: [typescript({ tsconfig: "tsconfig.json" })], // type of language we used
});
