const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./src/index.ts"],
  define: { "process.env.NODE_ENV": "production" },
  bundle: true,
  minify: true,
  external: ["react", "react-dom", "@material-ui/*", "styled-components"],
  loader: { ".png": "dataurl" },
  logLevel: "error",
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11"],
  outfile: "dist/bundle.js"
}).catch(() => process.exit(1));