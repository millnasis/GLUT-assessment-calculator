module.exports = [
  {
    // oneOf选项让其数组中的所有loader只执行其中一个，提升性能，但是不能有多个loader同时处理一种文件的情况
    // 有的话要按照普通的rules写法，即传入的对象直接是loader的匹配规则
    oneOf: [
      {
        test: /\.(s[ac]ss)|(css)$/,
        // exclude:/node_modules/,
        //想排除node_modules目录应该这么写，官方的写法
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
            //postcss-loader会把css代码转换成package.json中browerslist指定浏览器支持的css代码
          },
        ],
      },
      {
        // babel实现对浏览器的js兼容处理，使用babel-loader，并且加载babel的预设
        test: /\.(m?js)|(jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                // 以下是core-js的配置，core-js让babel的polyfill实现按需使用
                useBuiltIns: "usage",
                // 指定corejs的版本
                corejs: {
                  version: 3,
                },
                // 指定需要兼容的浏览器版本
                targets: {
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  safari: "10",
                  edge: "17",
                },
              },
            ],
            ["@babel/preset-react"],
          ],
          // 开启babel的缓存，可以提升速度
          cacheDirectory: true,
        },
      },
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        type: "asset/resource",
        //asset/resource一定要用type选项
        generator: {
          filename: "img/[hash][ext]",
        },
        //generator中的filename是设置输出文件的文件名和存放结构[hash]指的是webpack指定的名字
        //也可以缩短哈希，如[hash:10]就是只使用10为哈希值，[ext]是原来的扩展名
      },
      {
        test: /\.(xlsx|xls|csv)$/,
        type: "asset/resource",
        //asset/resource一定要用type选项
        generator: {
          filename: "xlsx/[name][ext]",
        },
        //generator中的filename是设置输出文件的文件名和存放结构[hash]指的是webpack指定的名字
        //也可以缩短哈希，如[hash:10]就是只使用10为哈希值，[ext]是原来的扩展名
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "media/[hash][ext]",
        },
        //asset/resource可以处理任何静态资源，图片和字体都可以
      },
      {
        test: /\.html$/,
        use: ["html-loader"], //只使用单个loader的时候可以使用loader选项，这里写loader:"html-loader是一样的"
        //html-loader将html转为字符串再进行编译输出，可以处理html中的资源标签中的连接，比如img标签的src连接
        //use数组中的每个loader可以扩展成一个对象，里面loader选项自动loader名，options选项指定其他内容
      },
    ],
  },
];
