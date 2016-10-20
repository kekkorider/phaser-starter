var MyGame = {};

MyGame.Boot = function() {};

MyGame.Boot.prototype = {

	init: function() {

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

	}, 

	preload: function() {

		this.load.path = 'assets/';

		// this.load.image('preloader-bar', 'preloader-bar.png');

	}, 

	create: function() {
        console.log('Boot state');
		game.state.start('MyGame.Preload');
	}

};
