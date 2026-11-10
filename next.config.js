/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers cannot run the native `sharp` optimizer. The only image
  // in the app is a static asset, so serve images unoptimized.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
