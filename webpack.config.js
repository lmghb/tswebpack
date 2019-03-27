const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

module.exports = {
	entry: {
		main: './src/index.ts'
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/templates/index.html'
		}),
	],

	module: {
		rules: [
			{
				loader: 'ts-loader',
				test: /\.tsx?$/,
				exclude: /node_modules/
			}
		]
	},

	output: {
		path: __dirname + '/dist',
		//chunkFilename: '[name].[chunkhash].js',
		//filename: 'build/[name].[chunkhash].js'
		filename: '[name].[chunkhash].js'
	},

	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},

	devServer: {
		// https://webpack.js.org/configuration/dev-server
		contentBase: __dirname + '/dist',
		compress: true,
		port: 9000,
		headers: {
			'X-Custom-Foo': 'bar'
		},
		https: true,
		open: true
	},

	optimization: {
		noEmitOnErrors: true,
		minimizer: [
			new UglifyJsPlugin({
				extractComments: true,
				// sourceMap: true
			})
		]
	}
};
