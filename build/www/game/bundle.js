var MyGame = {};

MyGame.Boot = function() {};

MyGame.Boot.prototype = {

	preload: function() {

		this.load.path = 'assets/';

		// this.load.image('preloader-bar', 'preloader-bar.png');

	}, 

	create: function() {
        console.log('Boot state');
		game.state.start('MyGame.Preload');
	}

};

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

/*
 * MainMenu class
 */
MyGame.MainMenu = function() {};

MyGame.MainMenu.prototype = {

	create: function() {

        console.log('MainMenu state');

        var text_style = {
            font: 'normal 23px Arial', 
            fill: '#fff', 
        };

        var text = this.add.text(this.world.centerX, this.world.centerY, 'Press Z or tap to start', text_style);
        text.anchor.setTo(0.5);

        var new_game_key = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        new_game_key.onDown.add(function() {
            this.state.start('MyGame.Game');
        }, this);

        game.input.onDown.add(function() {
            this.state.start('MyGame.Game');
        }, this);

	}

};

/*
 * Game class
 */
MyGame.Game = function(game) {

	this.debug = false;

	this.back_key = null;
	this.debug_key = null;

	this.text = null;
	this.text_style = {
        font: 'normal 23px Arial', 
        fill: '#fff', 
	};

};

MyGame.Game.prototype = {

	create: function() {

		console.log('Game state');

        this.text = this.add.text(this.world.centerX, this.world.centerY, 'Press Z or tap to go to MainMenu state', this.text_style);
        this.text.anchor.setTo(0.5);

		// Back to MainMenu
        this.back_key = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.back_key.onDown.add(function() {
            this.state.start('MyGame.MainMenu');
        }, this);

		game.input.onDown.add(function() {
            this.state.start('MyGame.MainMenu');
        }, this);

		// Debug key
		this.debug_key = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.debug_key.onDown.add(function() {
            this.toggleDebug();
        }, this);

	}, 

	render: function() {

		if ( this.debug ) {
			game.debug.text('Debug active', 30, 30);
		}

	}, 

	toggleDebug: function() {
		this.debug = !this.debug;
	}

};
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', null);

game.state.add('MyGame.Boot', MyGame.Boot);
game.state.add('MyGame.Preload', MyGame.Preload);
game.state.add('MyGame.MainMenu', MyGame.MainMenu);
game.state.add('MyGame.Game', MyGame.Game);

game.state.start('MyGame.Boot');