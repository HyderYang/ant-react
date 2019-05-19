### 配置 `Webpack` 和 `使用less`
#### 依赖列表:

```json
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
```

#### 添加依赖

    yarn add react-router-dom axios less less-loader babel-plugin-import
    
#### 开启 webpack 配置

    npm run eject
    
*个人环境使用 yarn eject 有问题*

#### 修改配置

修改文件``config/webpack.config.js``

42行附近
```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;    //新增
const lessModuleRegex = /\.module\.less$/;    //新增
```

445行附近
```js
{
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'sass-loader'
  ),
},

{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    { importLoaders: 2 },
    'less-loader'),
},
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
  ),
},
```
