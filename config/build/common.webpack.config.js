'use strict';

/**
 * Import from node_modules
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Export Webpack common configuration
 */
const commonWebpackConfig = {
	/**
	 * Entry point file for bundling the application
	 */
	entry: './src/frontcore.js',

	module: {
		loaders: [
			/**
			 * Babel loader support for *.(js|jsx) files.
			 * This set also includes babel presets for ES6 and React
			 */
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1']
				}
			},

			/**
			 * Json loader support for *.json files.
			 */
			{
				test: /\.json$/,
				loader: 'json-loader'
			},

			/**
			 * Style, Less loader support for *.less files.
			 */
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},

			/**
			 * Style, CSS loader support for *.css files.
			 */
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},

			/**
			 * File loader support for *.(jpg|jpeg|png|gif) files.
			 */
			{
				test: /\.(jpg|jpeg|png|gif)?$/,
				loader: 'file-loader'
			},

			/**
			 * URL loader support for font woff(2) files.
			 */
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},

			/**
			 * File loader support for rest of the fonts (ttf, eot, svg)
			 */
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file"
			}
		]
	},

	plugins: [
		/**
		 * Generates a solid base html page for your web application with
		 * all your webpack generated css and js files built in.
		 */
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};

module.exports = commonWebpackConfig;
