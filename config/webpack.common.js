// webpack.common.js
const path = require('path');
const glob = require('glob');

function addEntry() {
  const entry = {};
  // const entryFiles = glob.sync(path.join(__dirname, "../ways/*.ts"));
  const pathStr = path.join(__dirname, "../src/*.ts").replace(/\\/g,'/');
  const entryFiles = glob.sync(pathStr);
  entryFiles.map((_, index) => {
    const entryFile = entryFiles[index];
    const reg = /.*\/(.*?).ts$/;
    const match = entryFile.match(reg);
    const pageName = match[1];
    entry[pageName] = entryFile;
  });
  // entry['index'] = path.resolve(__dirname, '../src/index.ts');
  return entry;
}

module.exports = {
  mode: 'production',
  // entry: path.resolve(__dirname, '../src/index.ts'),
  entry: addEntry(),
  output: {
    path: path.resolve(__dirname, '../dist/src'),
    publicPath: '/dist/',
    libraryTarget: 'umd',
    filename: '[name].js',
    library: "ways"
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // 指定特定的ts编译配置，为了区分脚本的ts配置
                    configFile: path.resolve(__dirname, '../tsconfig.json'),
                },
            },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1"
                },
                corejs: 3,//新版本需要指定核⼼库版本
                useBuiltIns: "usage"//按需注⼊
              }
            ],
            plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-modules-commonjs'
            ]
          }
        }
      }
    ]
  },
  
} // 暂不添加配置