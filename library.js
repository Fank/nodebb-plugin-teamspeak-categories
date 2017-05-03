"use strict";

var controllers = require('./lib/controllers'),
	plugin = {};

plugin.init = function (params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/teamspeakcategories', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/teamspeakcategories', controllers.renderAdminPage);

	callback();
};

plugin.addAdminNavigation = function (header, callback) {
	header.plugins.push({
		route: '/plugins/teamspeakcategories',
		icon: 'fa-tint',
		name: 'Teamspeak Categories'
	});

	callback(null, header);
};

plugin.updateTeamspeakChannel = function(data, callback){
	controllers.updateTeamspeakChannel(data, callback)
	// callback(null, data) //passes topic data on to system
};

module.exports = plugin;
