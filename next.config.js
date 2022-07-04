/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const StylelintPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com'],
    },
    dir: './src',
    webpack(config) {
        config.plugins.push(new StylelintPlugin({ quiet: true }));

        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
