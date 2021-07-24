//vue-cli配置文件
module.exports = {
  devServer: {
      proxy: {
        '/x': {
            target: 'https://api.bilibili.com',
            onProxyRep(proxyReq) {
              proxyReq.setHeader('origin','https://www.bilibili.com');
              proxyReq.setHeader('referer','https://www.bilibili.com/v/channel');
            },
        },
      },
  },
};
