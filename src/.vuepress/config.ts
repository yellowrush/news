import { title, description } from '../db/head';

module.exports = {
  base: '/',
  title,
  description,
  themeConfig: {
    nav: [
      { text: '关注', link: '/1' },
      { text: '推荐', link: '/2' },
      {
        text: '北京',
        link: '/3',
        items: [{ text: 'test', link: '/5' }],
      },
    ],
  },
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  chainWebpack: (config) => {
    /** Webpack rule to handle some non-image assets that we'll use */
    config.module
      .rule('files')
      .test(/\.(pdf|zip|ait|log|rar|txt)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`,
        limit: 10000,
        esModule: false,
      });
    /** Explicitly setting esModule:false
     * to avoid this issue https://github.com/vuejs/vue-loader/issues/1612
     */
    config.module.rule('images').use('url-loader').options({
      limit: 10000,
      esModule: false,
    });
  },
};
