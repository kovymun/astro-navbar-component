// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Barlow",
      cssVariable: "--font-barlow",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],
});
