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