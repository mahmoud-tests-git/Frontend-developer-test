import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: '@lingui/loader',
      },
    });
    return config;
  },
  experimental: {
    swcPlugins: [
      [
        '@lingui/swc-plugin',
        {
          runtimeModules: {
            i18n: ['@lingui/core', 'i18n'],
            trans: ['@lingui/react', 'Trans'],
          },
        },
      ],
    ],
  },
};

export default nextConfig;
