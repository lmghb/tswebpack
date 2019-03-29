const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CssTypingsGenerator = require('typescript-plugin-css-modules');
// const CssTypingsGenerator = require('typed-css-modules');

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
		main: './src/app/index.ts'
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/templates/index.html'
		}),
	],

	module: {
		rules: [
			// https://webpack.js.org/concepts/loaders
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',	// 'css-loader/url' refers css as separate files
						options: {
							modules: true,
							namedExport: true,
							camelCase: true,
							// localIdentName: '[local]',
							// sourceMap: true,
							// exportOnlyLocals: false
						}
					}
				],
			},
		]
	},

	output: {
		path: __dirname + '/dist',
		//chunkFilename: '[name].[chunkhash].js',
		//filename: 'build/[name].[chunkhash].js'
		filename: '[name].[hash].js'
	},

	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.css' ]
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
