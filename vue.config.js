module.exports ={
    devServer :{
        port:2018,
        host:"0.0.0.0",
        https:false,
        open:true,
        disableHostCheck: true,
        proxy:{
            '/api':{
                target:'http://nacos.fangxz.top',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                },
            }
        }
    },
    publicPath:'/',
    assetsDir:'assets',
    outputDir:'dist',
    lintOnSave:false,
    productionSourceMap:false,
}