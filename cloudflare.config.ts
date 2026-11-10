import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "whichdoorbest",
    "compatibilityDate": "2026-09-25",
    "observability": {
      "enabled": true
    }
  }
});
