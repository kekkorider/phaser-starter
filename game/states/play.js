import Phaser from 'phaser';
import {Wizard} from '../sprites/wizard';

export class Play extends Phaser.State {

    create() {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.wizard = new Wizard(this.game, this.game.world.centerX, this.game.world.centerY);
        this.game.add.existing(this.wizard);

        let textStyle = {font: '30px Arial', align: 'center', stroke: 'white', fill: 'white'};

        let text = this.add.text(this.world.centerX, this.world.centerY - 40, 'This is the game state', textStyle);
        text.anchor.set(0.5);

        let commands = this.add.text(this.world.centerX, this.world.centerY + 30, 'Press Z to go to the Victory State\nPress X to go to the GameOver State', textStyle);
        commands.anchor.set(0.5);
        commands.fontSize = 20;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        let victoryBtn  = this.input.keyboard.addKey(Phaser.Keyboard.Z), 
            gameoverBtn = this.input.keyboard.addKey(Phaser.Keyboard.X);

        victoryBtn.onDown.addOnce( () => this.state.start('victory') );

        gameoverBtn.onDown.addOnce( () => this.state.start('gameover') );

    }

    update() {

        this.wizard.move(this.cursors);

    }

}
