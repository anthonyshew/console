import { applyDefaults, copyDrizzlePlugin } from "@akashnetwork/dev-config/tsup-plugins.ts";
import { defineConfig } from "tsup";

import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig(async () =>
  applyDefaults({
    packageJson,
    entry: ["./src/server.ts", "./src/rest-app.ts", "./src/background-jobs-app.ts", "./src/console.ts"],
    target: tsconfig.compilerOptions.target,
    tsconfig: "tsconfig.build.json",
    watch: !isProduction,
    external: ["pino-pretty"],
    plugins: isProduction ? [copyDrizzlePlugin] : [],
    onSuccess: isProduction ? undefined : "node --enable-source-maps dist/server.js"
  })
);
