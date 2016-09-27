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
