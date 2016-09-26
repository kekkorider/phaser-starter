/*
 * Preload class
 */
MyGame.Preload = function() {};

MyGame.Preload.prototype = {

	init: function() {}, 

	preload: function() {
		this.load.path = 'assets/';
	}, 

	create: function() {
		console.log('Preload state');
		this.state.start('MyGame.MainMenu');
	}

};
