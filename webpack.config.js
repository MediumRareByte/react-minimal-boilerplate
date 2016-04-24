var path         = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/js/index.js",
    // context: path.join(__dirname),
    output: {
        path: "./dist/js",
        filename: "bundle.js",
    },
    module: {
        noParse: [/\.json$/],
        loaders: [
            // { loader: "style" },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.scss$/,
                loader: "sass-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ],
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    sassLoader: {
        // includePaths: [path.resolve(__dirname, "./some-folder")]
    }
};