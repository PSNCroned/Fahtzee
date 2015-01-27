function blurBg(sel) {
	console.log("Blur called");
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

function roll(holds) {
	var dice = [];
	for (var i = 0; i < 6; i++) {
		if (holds[i] != 1) {
			var num = Math.floor((Math.random() * 6) + 1);
			dice[i] = num;
			console.log("Rolled a " + num);
		}
	}
	return dice;
}

function scoreDice(dicenums) {
	var scores = [];
	var scorecount = 0;
	var hasScore = false;
	var perfstraight = false;
	one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
	for (var i = 0; i < 6; i++) {
		if (dicenums[i] == 6){
			six++;
			}
		else if (dicenums[i] == 5){
			five++;
			}
		else if (dicenums[i] == 4){
			four++;
			}
		else if (dicenums[i] == 3){
			three++;
			}
		else if (dicenums[i] == 2){
			two++;
			}
		else if (dicenums[i] == 1){
			one++;
			}
		}
	
	var checkPairs = function() {
    	var pairs = 0;
    	
    	if (one === 2) {
    		pairs ++;
    	}
    	if (two === 2) {
    		pairs ++;
    	}
    	if (three === 2) {
    		pairs ++;
    	}
    	if (four === 2) {
    		pairs ++;
    	}
    	if (five === 2) {
    		pairs ++;
    	}
    	if (six === 2) {
    		pairs ++;
    	}
    	
    	if (pairs === 3) {
    		return true;
    	}
    	else {
    		return false;
    	}
    }
	
	if (dicenums[0] === 1 && dicenums[1] === 2 && dicenums[2] === 3 && dicenums[3] === 4 && dicenums[4] === 5 && dicenums[5] === 6) {
			scores.push("Perfect Straight!");
			hasScore = true;
			perfstraight = true;
			scorecount += 10000;
	}
	
	else if (dicenums[0] === 1 && dicenums[1] === 2 && dicenums[2] === 3 && dicenums[3] === 4 && dicenums[4] === 5 ||
		dicenums[1] === 1 && dicenums[2] === 2 && dicenums[3] === 3 && dicenums[4] === 4 && dicenums[5] === 5) {
			scores.push("5 Part Straight!");
			hasScore = true;
			scorecount += 5000;
	}
	
	else if (dicenums[0] === 1 && dicenums[1] === 2 && dicenums[2] === 3 && dicenums[3] === 4 ||
		dicenums[1] === 1 && dicenums[2] === 2 && dicenums[3] === 3 && dicenums[4] === 4 ||
		dicenums[2] === 1 && dicenums[3] === 2 && dicenums[4] === 3 && dicenums[5] === 4) {
			scores.push("4 Part Straight!");
			hasScore = true;
			scorecount += 2500;
	}
	
	else if (dicenums[0] === 1 && dicenums[1] === 2 && dicenums[2] === 3 ||
		dicenums[1] === 1 && dicenums[2] === 2 && dicenums[3] === 3 ||
		dicenums[2] === 1 && dicenums[3] === 2 && dicenums[4] === 3 ||
		dicenums[3] === 1 && dicenums[4] === 2 && dicenums[5] === 3) {
			scores.push("3 Part Straight!");
			hasScore = true;
			scorecount += 1000;
	}
	
	if (one === 1 &&
		two === 1 &&
		three === 1 &&
		four === 1 &&
		five === 1 &&
		six === 1 && 
		perfstraight === false) {
			scores.push("Imperfect Straight!");
			hasScore = true;
			scorecount += 2000;
	}

	if (checkPairs()) {
		scores.push("Pairs!");
		hasScore = true;
		scorecount += 1000;
	}

	if (six > 2 && six < 6) {
		scores.push(six + " sixes!");
		hasScore = true;
		scorecount += 600*(six-2);
	}

	if (five > 2 && five < 6) {
		scores.push(five + " fives!");
		hasScore = true;
		scorecount += 500*(five-2);
	}

	if (four > 2 && four < 6) {
		scores.push(four + " fours!");
		hasScore = true;
		scorecount += 400*(four-2);
	}

	if (three > 2 && three < 6) {
		scores.push(three + " threes!");
		hasScore = true;
		scorecount += 300*(three-2);
	}

	if (two > 2 && two < 6) {
		scores.push(two + " twos!");
		hasScore = true;
		scorecount += 200*(two-2);
	}

	if (one > 2 &&  one < 6) {
		scores.push(one + " ones!");
		hasScore = true;
		scorecount += 100*(one-2);
	}

	if (one === 6 ||
		two === 6 ||
		three === 6 ||
		four === 6 ||
		five === 6 ||
		six === 6) {
			scores.push("Fahtzee!");
			hasScore = true;
			scorecount += 5000;
	}

	if (hasScore === false) {
		scores.push(" No score! ");
	}
	
	console.log(scores);
	return scorecount;
}

Template.body.events({
	"click #cell1": function () {
		Session.set("pageDisplay", "index");
	},
	"click #cell2": function() {
		Session.set("pageDisplay", "play");
	},
	"click #cell3": function() {
		Session.set("pageDisplay", "instructions");
	},
	"click #cell4": function () {
		Session.set("pageDisplay", "settings");
	}
});

Template.loginContent.events({
	"submit #meteorLogin": function(event, form) {
		event.preventDefault;
		var name = form.find("#loginName").value, 
		pass = form.find("#loginPass").value;

		Meteor.loginWithPassword(name, pass, function(err) {
			if (err) {
				alert("Invalid login");
			}
			else {
				console.log("Login successful!");
				Session.set("popup", "none");
				unBlur("#homewrapper");
			}
		});
		return false;
	},
	"click #switchRegister": function() {
		Session.set("popup", "register");
	}
});

Template.registerContent.events({
	"submit #meteorRegister": function(event, form) {
		event.preventDefault;
		var name = form.find("#registerName").value, 
		pass = form.find("#registerPass").value;

		Accounts.createUser({
			username: name,
			password: pass
		}, function (err) {
			if (err) {
				console.log("Could not create account!");
			}
			else {
				console.log("Register successful!");
				Session.set("popup", "none");
				unBlur("#homewrapper");
			}
		});
		return false;
	},
	"click #switchLogin": function() {
		Session.set("popup", "login");
	}
});

Template.logoutContent.events({
	"click #okayButton": function(event) {
		event.preventDefault;
		Session.set("popup", "none");
		unBlur("#homewrapper");
		return false;
	},
	"click .logoutButton": function(event) {
		event.preventDefault;
		Meteor.logout(function () {
			Session.set("popup", "login");
		});
		return false;
	}
});

Template.settingsContent.events({
	"click .logoutButton": function(event) {
	event.preventDefault;
	Meteor.logout(function () {
		Session.set("pageDisplay", "index");
		Session.set("popup", "login");
	});
	return false;
	}
});

Template.playContent.events({
	"click #create": function() {
		Session.set("popup", "create");
	}
});

Template.createContent.events({
	"submit #submitCreate": function(event, form) {
		event.preventDefault;
		
		var hostname = Meteor.user().username;
		var playerLimit = parseInt(form.find("#playernumselect").value);
		var isPrivate = form.find("#privatecheck").checked;
		var isStarted = false;
		var playerList = [];
		var totalPlayers = 0;
		var turn = 0;
		var dice = [];
		var holds = [];
		var rolls = 0;
		var scores = [];
		var playerDice = [];
		for (var i = 0; i < playerLimit; i++) {
			scores.push(0);
		}

		var id = GameList.insert({
			hostname: hostname,
			playerLimit: playerLimit,
			isPrivate: isPrivate,
			isStarted: isStarted,
			playerList: playerList,
			totalPlayers: totalPlayers,
			turn: turn,
			dice: dice,
			holds: holds,
			rolls: rolls,
			scores: scores,
			playerDice: playerDice
		});
		console.log("Created a new game, hostname: " + hostname + ", playerLimit: " + playerLimit + ", isPrivate: " + isPrivate + ", isStarted: " + isStarted + ", playerList: " + playerList + "turn: " + turn);
		alert("Game Created!");
		Meteor.call("joinGame", Meteor.user().username, id);
		Session.set("inGame", id);
		Session.set("popup", "none");
		unBlur("#homewrapper");
		return false;
	},
	"click #cancelCreate": function() {
		Session.set("popup", "none");
		unBlur("#homewrapper");
	}
});

Template.gameList.events({
	"submit #joinGame": function(event, form) {
		event.preventDefault;
		var id = event.target.id.value;
		
		Meteor.call("joinGame", Meteor.user().username, id);
		console.log("Joined game: " + id);
		Session.set("inGame", id);
		Session.set("pageDisplay", "game");

		return false;
	}
});

//working on scores display
Template.gameContent.events({
	"click #roll": function () {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var pList = Game.playerList;
		var name = Meteor.user().username;
		var turn = Game.turn;
		var rolls = Game.rolls;
		var isStarted = Game.isStarted;
		console.log("Roll button clicked by " + name + ", and it is the turn of " + pList[turn]);
		
		if (pList[turn] === name && rolls < 3 && isStarted === true) {
			var dice = Game.dice;
			var holds = Game.holds;
			var playerLimit = Game.playerLimit;
			var scores = Game.scores;
			var playerDice = Game.playerDice;
			dice = roll(holds);
			rolls++;
			
			playerDice[turn] = dice;
			
			console.log(dice);
			var update = function() {
				GameList.update(id, {
					hostname: Game.hostname,
					playerLimit: Game.playerLimit,
					isPrivate: Game.isPrivate,
					isStarted: Game.isStarted,
					playerList: Game.playerList,
					totalPlayers: Game.totalPlayers,
					turn: turn,
					dice: dice,
					holds: Game.holds,
					rolls: rolls,
					scores: scores,
					playerDice: playerDice
				});
			}
			update();
			var changeTurn = function() {
				if (playerLimit <= turn + 1 ) {
					turn = 0;
					update();
				}
				else {
					turn ++;
					update();
				}
			}
		}
	},
	"click #score": function() {
		var id = Session.get("inGame");
		var Game = GameList.find({_id: id}).fetch()[0];
		var pList = Game.playerList;
		var name = Meteor.user().username;
		var turn = Game.turn;
		var rolls = Game.rolls;
		var isStarted = Game.isStarted;
		var playerLimit = Game.playerLimit;
		console.log("Score button clicked by " + name + ", and it is the turn of " + pList[turn]);
		
		if (pList[turn] === name && isStarted === true) {
			var update = function() {
				GameList.update(id, {
					hostname: Game.hostname,
					playerLimit: Game.playerLimit,
					isPrivate: Game.isPrivate,
					isStarted: Game.isStarted,
					playerList: Game.playerList,
					totalPlayers: Game.totalPlayers,
					turn: turn,
					dice: Game.dice,
					holds: Game.holds,
					rolls: rolls,
					scores: scores,
					playerDice: playerDice
				});
			}
			var scores = Game.scores;
			var playerDice = Game.playerDice;
			console.log(playerDice);
			var score = scoreDice(playerDice[turn]);
			scores[turn] = scores[turn] + score;
			if (turn >= playerLimit - 1) {
				turn = 0;
			}
			else {
				turn = turn + 1;
			}
			rolls = 0;
			update();
		}
	}
});