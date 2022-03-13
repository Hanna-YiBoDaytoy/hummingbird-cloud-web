const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'/* 生产环境子路径*/
        ? './'
        : './',
    outputDir: 'dist', /*生产环境构建文件的目录，默认 dist*/
    assetsDir: 'static', /*放置生成静态资源的目录，默认''*/
    filenameHashing: false, /*该项设置为false关闭生成的静态资源文件名包含hash,默认true*/
    productionSourceMap: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px-to-viewport')({
                        unitToConvert: 'px',
                        viewportWidth: 1920,
                        viewportHeight: 1120,
                        unitPrecision: 5,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: [],
                        landscape: false,
                        landscapeUnit: 'vw',
                        landscapeWidth: 1334
                    })
                ]
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader?cacheDirectory',
                    exclude: /node_modules/, // 排除不处理的目录
                    include: path.resolve(__dirname, 'src') // 精确指定要处理的目录
                }
            ],
            noParse: function (content) {
                return /jquery|lodash/.test(content)
            },
        },
        plugins: [
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
            }
        }
    }
}
