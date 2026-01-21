// !!! WARNING: Need this file to ensure that the app/index.ts file is loaded before the entry point.
// import only libraries here, no application code should be imported statically!

import "reflect-metadata";
import "@akashnetwork/env-loader";

export async function bootstrapEntry<T>(loadEntry: () => Promise<T>): Promise<T> {
  await import("./open-telemetry.ts");
  await import("./app/index.ts");
  return await loadEntry();
}
