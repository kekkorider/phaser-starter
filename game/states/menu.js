import Phaser from 'phaser';

export class Menu extends Phaser.State {

    create() {

        let textStyle = {font: '45px Arial', alight: 'center', stroke: 'white', fill: 'white'};

        let title = this.add.text(this.world.centerX, this.world.centerY, 'Yolo', textStyle);
        title.anchor.set(0.5);

    }

}
