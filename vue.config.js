const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 关闭eslint校验
  //用于解决 error Component name “你的组件名“ should always be multi-word vue/multi-word-component-names
  //lintOnSave:false,
  transpileDependencies: true,
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    proxy:'http://cheng_yue.com'
    // proxy:'https://c28d70fe-93ce-4e09-ae3f-6d26ecbf5e57.mock.pstmn.io'
    // proxy: {
    //   '/api':{
    //     'target':'http://cheng_yue.com',
    //     'rewrite':{'^/api':''},
    //     'ws':true,
    //     'changeOrigin':true
    //   }
      // '/demo':{
      //   'target':'http://cheng_yue.com',
      //   'rewrite':{'^/demo':''},
      //   'ws':true,
      //   'changeOrigin':true
      // }
    // }

  }
})
