const webpack = require('webpack')
const path = require('path')
const express = require('express')
const app = express()
let appData = require('./data.json')
var apiRoutes = express.Router()
app.use('/vue-sell/api',apiRoutes)
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-sell/' : '/',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', (req, res) => {
        const id = req.query.id
        res.json({
          errno: 0,
          data: Object.assign({}, seller, {id})
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api',resolve('src/api'))
      config.plugin('context')
        .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
  }
}
