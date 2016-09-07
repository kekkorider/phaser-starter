import Phaser from 'phaser';

export class Menu extends Phaser.State {

    create() {

        let img = this.add.image(this.world.centerX, this.world.centerY, 'phaser');
        img.anchor.set(0.5);
        img.alpha = 0.4;

        let textStyle = {font: '45px Arial', align: 'center', stroke: 'white', fill: 'white'};

        let title = this.add.text(this.world.centerX, this.world.centerY - 40, 'Phaser ES6 Starter', textStyle);
        title.anchor.set(0.5);

        let subtitle = this.add.text(this.world.centerX, this.world.centerY + 30, 'Press Z to start', textStyle);
        subtitle.anchor.set(0.5);
        subtitle.fontSize = 25;

        let startBtn = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        startBtn.onDown.addOnce( () => this.state.start('play') );

    }

}
