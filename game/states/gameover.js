import Phaser from 'phaser';

export class GameOver extends Phaser.State {

    create() {

        let textStyle = {font: '30px Arial', align: 'center', stroke: 'white', fill: 'white'};

        let text = this.add.text(this.world.centerX, this.world.centerY - 40, 'This is the GameOver state', textStyle);
        text.anchor.set(0.5);

        let commands = this.add.text(this.world.centerX, this.world.centerY + 30, 'Press Z to go to the MainMenu State', textStyle);
        commands.anchor.set(0.5);
        commands.fontSize = 20;

        let btn  = this.input.keyboard.addKey(Phaser.Keyboard.Z);

        btn.onDown.add(function() {
            this.state.start('menu');
        }, this);

    }

}
