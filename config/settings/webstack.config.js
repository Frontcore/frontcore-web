'use strict';

/**
 * Import from node_modules
 */
const processEnv = process.env;

/**
 * Export constants configuration
 */
module.exports = {
	/**
	 * Constants for webpack-dev-server to development environment
	 */
	"dev": {
		"ENV": processEnv.NODE_ENV || "development",
		"HOST": processEnv.HOST || "localhost",
		"PORT": processEnv.PORT || 3000
	},

	/**
	 * Constants for webpack-dev-server to production environment
	 * to check locally.
	 */
	"prod": {
		"ENV": processEnv.NODE_ENV || "production",
		"HOST": processEnv.HOST || "localhost",
		"PORT": processEnv.PORT || 3500
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
