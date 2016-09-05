import Phaser from 'phaser';
import {Preload} from './states/preload';
import {Menu} from './states/menu';
import {Play} from './states/play';
import {GameOver} from './states/gameover';
import {Victory} from './states/victory';

export class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'game', {create: () => {

			this.state.add('preload', Preload);
			this.state.add('menu', Menu);
			this.state.add('play', Play);
			this.state.add('gameover', GameOver);
			this.state.add('victory', Victory);

			this.state.start('preload');

		}});
	}

}