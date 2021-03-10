const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    publicPath: process.env.NODE_ENV === 'production' ? 'wxunicom/game' : './',
    //  publicPath 也就是在npm run build的时候，判断如果是 npm run build 那么就在所有的静态文件之前 加上/orderschedule/orderschedule_app/  + 之前的路径
    productionSourceMap: process.env.NODE_ENV !== 'production',
    
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 0 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    },
    devServer: {
        open: true,
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/wxunicom': {
                target: 'http://esimwx.10010sh.cn:8999/',
                changeOrigin: true,
            }
        },
        before: app => {}
    },
}
