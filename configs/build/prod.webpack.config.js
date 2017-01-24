'use strict';

/**
 * Import from node_modules
 */
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const BannerPlugin = require('webpack/lib/BannerPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Import form local/current directory
 */
const commonWebpackConfig = require('./common.webpack.config');
const settings = require('../settings/webstack.config');

/**
 * Export Webpack production configuration.
 */

const prodWebpackConfig = {
	/**
	 * Options affecting the output of the Webpack bundling.
	 */
	output: {
		/**
		 * Required. The output directory as absolute path.
		 */
		path: settings.build.output,

		/**
		 * Specifies the name of each output file.
		 */
		filename: 'frontcore.min.js',

		/**
		 * Specify the filename of the source-map file for JavaScript files.
		 */
		sourceMapFilename: 'frontcore.map'
	},

	/**
	 * Module will get concatenated with Webpack common config module
	 */
	module: {},

	/**
	 * Plugins will get concatenated with Webpack common config plugins
	 */
	plugins: [
		/**
		 * Generates a solid base html page for your web application with
		 * all your webpack generated css and js files built in.
		 */
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),

		/**
		 * Reference environment variables through process.env
		 */
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(settings.prod.env)
			}
		}),

		/**
		 * Minimize all JavaScript output of chunks.
		 * Loaders are switched into minimizing mode.
		 */
		new UglifyJsPlugin(),

		/**
		 * Adds a banner to the top of each generated chunk.
		 */
		new BannerPlugin(settings.prod.banner)
	],

	devServer: {
		port: settings.prod.port,
		host: settings.prod.host
	}
};

module.exports = webpackMerge(commonWebpackConfig, prodWebpackConfig);
