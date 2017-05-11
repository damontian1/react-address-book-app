module.exports = {
  entry: [
    './src/js/index.jsx'
  ],
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  },
  devServer: { inline: true }
}