MyGame.Preload.prototype = {

	init: function() {

	}, 

	preload: function() {
		this.load.path = 'assets/';
	}, 

	create: function() {
		this.state.start('MyGame.Game');
	}

}
