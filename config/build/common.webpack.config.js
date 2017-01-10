'use strict';

/**
 * Import from node_modules
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Export Webpack common configuration
 */
module.exports = function(options) {
	return {
		/**
		 * Entry point file for bundling the application
		 */
		entry: './src/frontcore.js',

		resolve: {
			/**
			 * An array of extensions that should be used to resolve modules.
			 */
			extensions: ['.js', '.jsx', '.json']
		},

		module: {
			rules: [
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
				 * Less loader support for *.less files.
				 */
				{
					test: /\.less$/,
					loader: ['to-string-loader', 'less-loader']
				},

				/**
				 * CSS loader support for *.css files.
				 */
				{
					test: /\.css$/,
					loader: ['to-string-loader', 'css-loader']
				},

				/**
				 * File loader support for *.(jpg|jpeg|png|gif|svg|ttf|eot|woff|woff2) files.
				 */
				{
					test: /\.(jpg|jpeg|png|gif|svg|ttf|eot|woff|woff2)?$/,
					loader: 'file-loader'
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
	}

};
