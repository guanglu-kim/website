import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  lessLoader: {
    use: [
      'style-loader',
      'postcss-loader',
      'less-loader',
      {
        loader: 'string-replace-loader',
        options: {
          search: 'OSS',
          replace: process.env.OSS,
        },
      },
    ],
  },
});
