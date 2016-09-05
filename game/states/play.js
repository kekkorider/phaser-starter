import Phaser from 'phaser';

export class Play extends Phaser.State {

    create() {

        let textStyle = {font: '30px Arial', align: 'center', stroke: 'white', fill: 'white'};

        let text = this.add.text(this.world.centerX, this.world.centerY - 40, 'This is the game state', textStyle);
        text.anchor.set(0.5);

        let commands = this.add.text(this.world.centerX, this.world.centerY + 30, 'Press Z to go to the Victory State\nPress X to go to the GameOver State', textStyle);
        commands.anchor.set(0.5);
        commands.fontSize = 20;

        let victoryBtn  = this.input.keyboard.addKey(Phaser.Keyboard.Z), 
            gameoverBtn = this.input.keyboard.addKey(Phaser.Keyboard.X);

        victoryBtn.onDown.add(function() {
            this.state.start('victory');
        }, this);

        gameoverBtn.onDown.add(function() {
            this.state.start('gameover');
        }, this);

    }

}
