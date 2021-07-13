// esbuild src/types.ts --outfile=dist/bundle.js --format=esm --bundle --watch --sourcemap --target=es2020,chrome58,firefox57,safari11 --loader:.png=dataurl --external:styled-components --external:@material-ui/* --external:react --external:react-dom --log-level=debug

require('esbuild').build({
    entryPoints: ['./src/index.ts'],
    format: 'esm',
    define: {"process.env.NODE_ENV": "development"},
    external: ["react", "react-dom", "@material-ui/*", "styled-components"],
    loader: {".png": "dataurl"},
    logLevel: "debug",
    bundle: true,
    minify: false,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'es2020'],
    outfile: 'dist/bundle.js',
    watch: true
}).then(result => {
    // Call "stop" on the result when you're done
    result.stop()
}).catch(() => process.exit(1))