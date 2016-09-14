var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', null);

game.state.add('MyGame.Boot', MyGame.Boot);
game.state.add('MyGame.Preload', MyGame.Preload);
game.state.add('MyGame.Game', MyGame.Game);

game.state.start('MyGame.Boot');
