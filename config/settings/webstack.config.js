'use strict';

/**
 * Import from node_modules
 */
const processEnv = process.env;

/**
 * Import form local/current directory
 */
const product = require('../../package.json');
const banner = `
	${product.name} v${product.version}
	Developed & maintained by ${product.author} and contributors.
	MIT Licensed.
`;

/**
 * Export constants configuration
 */
module.exports = {
	/**
	 * Constants for webpack-dev-server to development environment
	 */
	"dev": {
		"env": processEnv.NODE_ENV || "development",
		"host": processEnv.HOST || "localhost",
		"port": processEnv.PORT || 3000
	},

	/**
	 * Constants for webpack-dev-server to production environment
	 * to check locally.
	 */
	"prod": {
		"env": processEnv.NODE_ENV || "production",
		"host": processEnv.HOST || "localhost",
		"port": processEnv.PORT || 3500,
		"banner": banner
	},

	/**
	 * API versioning
	 */
	"api": {
		"default": {
			"version": "v1"
		}
	},

	/**
	 * Build options
	 */
	"build": {
		/**
		 * Distribution version for dev and prod will get generated on project root directory level
		 */
		"output": "dist"
	},

	/**
	 * Debug options
	 */
	"debug": {}
};
