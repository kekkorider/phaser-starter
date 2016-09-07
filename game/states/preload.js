import Phaser from 'phaser';

export class Preload extends Phaser.State {

    preload() {

        this.load.path = 'assets/';

        this.load.images(['phaser']);

        this.load.spritesheet('wizard', 'wizard.png', 95, 123, 6);

    }

    create() {
        this.state.start('menu');
    }

}
