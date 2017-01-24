'use strict';

/**
 * Import from node_modules
 */
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Import form local/current directory
 */
const commonWebpackConfig = require('./common.webpack.config');
const settings = require('../settings/webstack.config');

/**
 * Export Webpack development configuration.
 */

const devWebpackConfig = {
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
		 * Reference environment variables through process.env
		 */
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(settings.dev.env)
			}
		})
	],

	devServer: {
		port: settings.dev.port,
		host: settings.dev.host
	}
};

module.exports = webpackMerge(commonWebpackConfig, devWebpackConfig);
