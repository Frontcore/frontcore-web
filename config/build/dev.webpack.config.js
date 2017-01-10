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
module.exports = function(options) {
	return webpackMerge(commonWebpackConfig(), {
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
			filename: '[name].min.js',

			/**
			 * Specify the filename of the source-map file for JavaScript files.
			 */
			sourceMapFilename: '[file].map'
		},

		devServer: {

		}

	});
};
