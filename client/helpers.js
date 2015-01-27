function blurBg(sel) {
	$(sel).css({
		'filter': 'blur(5px)',
		'-webkit-filter': 'blur(5px)',
        '-moz-filter': 'blur(5px)',
        '-o-filter': 'blur(5px)',
        '-ms-filter': 'blur(5px)'
	});
}

function unBlur(sel) {
	$(sel).css({
		'filter': 'blur(0px)',
		'-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)'
	});
}

Template.body.helpers({
	"login": function() {
		if (Session.get("popup") == "login") {
			blurBg("#homewrapper");
			return true;
		}
		else {
			return false;
		}
	},
	"register": function() {
		if (Session.get("popup") == "register") {
			blurBg("#homewrapper");
			return true;
		}
		else {
			return false;
		}
	},
	"logout": function() {
		if (Session.get("popup") == "logout") {
			blurBg("#homewrapper");
			return true;
		}
		else {
			return false;
		}
	},
	"create": function() {
		if (Session.get("popup") == "create") {
			blurBg("#homewrapper");
			console.log("Create helper set to true");
			return true;
		}
		else {
			return false;
		}
	}
});

Template.main.helpers({
	"index": function() {
		if (Session.get("pageDisplay") == "index") {
			if (Session.get("inGame") == false) {
				$(".cell").css("background-color", "#333");
				$("#cell1").css("background-color", "#222");
				return true;
			}
			else {
				Session.set("pageDisplay", "game");
			}
		}
		else {
			return false;
		}
	},
	"play": function() {
		if (Session.get("pageDisplay") == "play") {
			if (Session.get("inGame") == false) {
				$(".cell").css("background-color", "#333");
				$("#cell2").css("background-color", "#222");
				return true;
			}
			else {
				Session.set("pageDisplay", "game");
			}
		}
		else {
			return false;
		}
	},
	"instructions": function() {
		if (Session.get("pageDisplay") == "instructions") {
			$(".cell").css("background-color", "#333");
			$("#cell3").css("background-color", "#222");
			return true;
		}
		else {
			return false;
		}
	},
	"settings": function() {
		if (Session.get("pageDisplay") == "settings") {
			if (Session.get("inGame") == false) {
				$(".cell").css("background-color", "#333");
				$("#cell4").css("background-color", "#222");
				return true;
			}
			else {
				Session.set("pageDisplay", "game");
			}
		}
		else {
			return false;
		}
	},
	"game": function() {
		if (Session.get("pageDisplay") == "game") {
			$(".cell").css("background-color", "#333");
			$("#cell2").css("background-color", "#222");
			return true;
		}
	}
});

Template.logoutContent.helpers({
	"playerName": function () {
		return Meteor.user().username;
	}
});

Template.gameList.helpers({
	"games": function() {
		return GameList.find();
	},
	"open": function() {
		var decision = true;
		if (parseInt(this.totalPlayers) >= parseInt(this.playerLimit)) {
			decision = false;
		}
		else if (this.isStarted == true) {
			decision = false;
		}
		else if (this.isPrivate == true) {
			decision = false;
		}

		for (var i = 0; i < this.playerList.length; i++) {
			if (this.playerList[i] == Meteor.user().username) {
				decision = false;
			}
		}
		return decision;
	}
});

Template.gameContent.helpers({
	"twop": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		if (Game.playerLimit === 2) {
			return true;
		}
	},
	"threep": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		if (Game.playerLimit === 3) {
			return true;
		}
	},
	"fourp": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		if (Game.playerLimit === 4) {
			return true;
		}
	}
});

Template.blueavi.helpers({
	"blueTurn": function() {
		var name = Meteor.user().username;
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var turn = Game.turn;
		
		if (turn === 0) {
			return "turn";
		}
		else {
			return "notTurn";
		}
	}
});

Template.redavi.helpers({
	"redTurn": function() {
		var name = Meteor.user().username;
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var turn = Game.turn;
		
		if (turn === 1) {
			return "turn";
		}
		else {
			return "notTurn";
		}
	}
});

Template.greenavi.helpers({
	"greenTurn": function() {
		var name = Meteor.user().username;
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var turn = Game.turn;
		
		if (turn === 2) {
			return "turn";
		}
		else {
			return "notTurn";
		}
	}
});

Template.yellowavi.helpers({
	"yellowTurn": function() {
		var name = Meteor.user().username;
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var turn = Game.turn;
		
		if (turn === 3) {
			return "turn";
		}
		else {
			return "notTurn";
		}
	}
});

Template.bluescore.helpers({
	"p1score": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var score = Game.scores[0];
		return score;
	}
});

Template.redscore.helpers({
	"p2score": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var score = Game.scores[1];
		return score;
	}
});

Template.greenscore.helpers({
	"p3score": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var score = Game.scores[2];
		var playerLimit = Game.playerLimit;
	},
	"hide": function () {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var playerLimit = Game.playerLimit;
		if (playerLimit < 3) {
			return "hide";
		}
	}
});

Template.yellowscore.helpers({
	"p4score": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var score = Game.scores[3];
		var playerLimit = Game.playerLimit;
		if (playerLimit > 3) {
			return score;
		}
	},
	"hide": function () {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var playerLimit = Game.playerLimit;
		if (playerLimit < 4) {
			return "hide";
		}
	}
});