const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const port = process.env.PORT || 3000;
 
module.exports = {
   entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, "/dist"),
       filename: "bundle.js",
       publicPath: '/',
   },
   devtool: 'inline-source-map',
   module: {
    rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
					loader: 'babel-loader',
				},
		              		options: {
				    presets: ["@babel/preset-env", "@babel/preset-react"],
				  },
            },
            {
                test: /\.(scss|sass)$/i,
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'path/to/imported/file/dir'),
                ],
                loaders: ["css", "sass"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, 
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' 
            }
          ]
        },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html",
           favicon: 'public/favicon.ico'
       })
   ],
   devServer: {
     host: 'localhost',
     port: port,
     historyApiFallback: true,
     open: true
   }
}
