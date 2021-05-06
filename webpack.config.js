const NodemonPlugin = require('nodemon-webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = (env, _) => {
  const isDev = !!env.WEBPACK_WATCH

  return {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : false,
    entry: { web: './src/apps/web/index.js' },

    // Node environment
    target: 'node',
    externals: [webpackNodeExternals()],

    // Build process customization
    plugins: [new NodemonPlugin()],

    // Module resolution
    resolve: { extensions: ['.js'] }
  }
}
