Meteor.methods({
	"joinGame": function (name, gameId) {
		var Game = GameList.find({_id: gameId}).fetch()[0];
		Game.playerList.push(name);
		Game.totalPlayers++;
		if (Game.totalPlayers >= Game.playerLimit) {
			Game.isStarted = true;
		}

		GameList.update(gameId, {
			hostname: Game.hostname,
			playerLimit: Game.playerLimit,
			isPrivate: Game.isPrivate,
			isStarted: Game.isStarted,
			playerList: Game.playerList,
			totalPlayers: Game.totalPlayers,
			turn: Game.turn,
			dice: Game.dice,
			holds: Game.holds,
			rolls: Game.rolls,
			scores: Game.scores,
			playerDice: Game.playerDice
		});

		console.log(name + " joined game " + gameId);
	}
});