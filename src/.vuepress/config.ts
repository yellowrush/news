module.exports = {
  base: '/',
  title: '今日头条',
  description:
    '今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。',
  keywords: '今日头条，头条，头条网，头条新闻，今日头条官网',
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
