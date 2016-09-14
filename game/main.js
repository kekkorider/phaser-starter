<<<<<<< HEAD
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', null);

game.state.add('MyGame.Boot', MyGame.Boot);
game.state.add('MyGame.Preload', MyGame.Preload);
game.state.add('MyGame.Game', MyGame.Game);

game.state.start('MyGame.Boot');
=======
import {Game} from './game';

new Game();
>>>>>>> 676219a511f93a3d808d4bd15879301a696a91dd
