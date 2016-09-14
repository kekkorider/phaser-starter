var MyGame = {};

MyGame.Boot = function() {};

MyGame.Boot.prototype = {

	preload: function() {

		this.load.path = 'assets/';

		// this.load.image('preloader-bar', 'preloader-bar.png');

	}, 

	create: function() {
        console.log('Booted. going to Preload state');
		game.state.start('MyGame.Preload');
	}

};
