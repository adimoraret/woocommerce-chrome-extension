var path = require("path")
module.exports = {
    entry: [
      path.resolve(__dirname, 'src/index')
    ],
    output: {
      path: __dirname + '/dist/scripts',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
        {test: /(\.css)$/, loaders: ['style', 'css']},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=imagxe/svg+xml'}
      ]
    }
}
