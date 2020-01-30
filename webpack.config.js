const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    modules: ["src", "node_modules"],
    // Add '.ts' and '.tsx' as resolvable extensions. + js for webpack dev server
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },

  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      title: "Development"
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
}
