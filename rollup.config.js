import typescript from "@rollup/plugin-typescript";

let config = {
  input: "./src/index.ts",
  output: {
    dir: "lib",
    format: "cjs",
    // entryFileNames: "[name].[hash].js",
    // assetFileNames: "[name].[hash][extname]",
  },
  plugins: [typescript()],
};

export default config;
