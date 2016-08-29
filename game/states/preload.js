import Phaser from 'phaser';

export class Preload extends Phaser.State {

    preload() {

        let textStyle = {
            font: '45px Arial', 
            align: 'center', 
            stroke: 'white'
        }

        this.load.path = 'assets/';

        this.load.image('phaser-logo', 'phaser.png');

    }

    create() {
        this.state.start('menu');
    }

}
