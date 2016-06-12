var MyGame = {};

/*
 * Preload class
 */
MyGame.Preload = function() {}

MyGame.Preload.prototype = {

	init: function() {

	}, 

	preload: function() {
		this.load.path = 'assets/';
	}, 

	create: function() {
		this.state.start('MyGame.Game');
	}

}

/*
 * Game class
 */
MyGame.Game = function(game) {

	this.property = null;

}

MyGame.Game.prototype = {

	create: function() {
		console.log('Game initiated');
	}

}


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', null);

game.state.add('MyGame.Preload', MyGame.Preload);
game.state.add('MyGame.Game', MyGame.Game);

game.state.start('MyGame.Preload');