/*
 * Preload class
 */
MyGame.Preload = function() {};

MyGame.Preload.prototype = {

	init: function() {

	}, 

	preload: function() {
		this.load.path = 'assets/';
	}, 

	create: function() {
		console.log('Preloaded everything. going to Game state');
		this.state.start('MyGame.Game');
	}

};
