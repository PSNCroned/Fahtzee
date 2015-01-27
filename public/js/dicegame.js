/*
Fahtzee - A cross between Farkle and Yahtzee
Copyright (c) 2014 Elliot Nester
*/

//global variables
var dice = [];
var dicenums = [];
var numstats = [0, 0, 0, 0, 0, 0];
var totalrolls = 0;
var percentages = [];
var turn = "blue";
var bluescore = 0;
var redscore = 0;
var greenscore = 0;
var yellowscore = 0;
var holds = [0, 0, 0, 0, 0, 0];
var rolled = false;
var iRolls = 0;
var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
var numplayers = 2;
var maxscore = 10000;

//functions
function play() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("game").style.display = "block";
	
	if (numplayers === 2) {
		document.getElementById("greenavi").style.display = "none";
		document.getElementById("greenscore").style.display = "none";
		document.getElementById("yellowavi").style.display = "none";
		document.getElementById("yellowscore").style.display = "none";
	}
	else if (numplayers === 3) {
		document.getElementById("yellowavi").style.display = "none";
		document.getElementById("yellowscore").style.display = "none";
	}
}

function left() {
	var img = document.getElementById("psetimg");
	var url = "https://dice-croned.c9.io/diceImages/";
	if (img.src == url + "ThreeP.png") {
		img.src = "diceImages/TwoP.png";
		numplayers = 2;
	}
	else if (img.src == url + "FourP.png") {
		
		img.src = "diceImages/ThreeP.png";
		numplayers = 3;
	}
}

function right() {
	var img = document.getElementById("psetimg");
	var url = "https://dice-croned.c9.io/diceImages/";
	if (img.src == url + "ThreeP.png") {
		img.src = "diceImages/FourP.png";
		numplayers = 4;
	}
	else if (img.src == url + "TwoP.png") {
		img.src = "diceImages/ThreeP.png";
		numplayers = 3;
	}
}

function roll() {
	if (iRolls < 3) {
		for(var i = 0; i < 6; i++) {
			if (holds[i] != 1) {
				var num = Math.floor((Math.random() * 6) + 1);
				dice[i] = num;
				dicenums[i] = num;

				var id = "";
				switch(i) {
					case 0:
						id = "first";
						break;
					case 1:
						id = "second";
						break;
					case 2:
						id = "third";
						break;
					case 3:
						id = "fourth";
						break;
					case 4:
						id = "fifth";
						break;
					case 5:
						id = "sixth";
						break;
				}

				switch(dice[i]) {
					case(1):
						document.getElementById(id).src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCABkAGQDAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAgHBgn/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGqQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR2YeW0a0AAAADzLOfKfK1AAAABkpkhSp0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAHRAAAgICAwEAAAAAAAAAAAAABAUGBwEDAjBgAP/aAAgBAQABBQLw1i2KfybgyBktKriYc5Yo6pADvWvPqQB35K6phXAEs2g0hvyUiRCR1d4b/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QALxAAAQMBBQYDCQAAAAAAAAAAAgEDBBEABRIhMRMUIjJhgTBSYBAjQXFykZLC8P/aAAgBAQAGPwL0NIuy7JBRY0ddmbjWRmaa56pRcsuutbHJjT5DLzh7RwkcX3i68Xm72PecO/RlQHcKc6LoXei/bw58aSbjrzbxITrqUJzPn769/ZeUzG4MZAFrBTgMta/Mf38PecZQp1MO2Aaof1J8cv7Kx75eTaRhPh2AVMx615V/KzcKE3gaHNVXmNfMvX0P/8QAIBABAQACAgICAwAAAAAAAAAAAREhMUFRADAQQFBgsf/aAAgBAQABPyH9GuJb68OMEHumQAF6JgRWjrJeVr34E5uEAGuQYUOW4EPWqU8GQRVXGbt5PxtPQlbssgaizhc+qAyaMYSa6AgiOS0B5I9GZTboJTpV3M9nClyV5U/gQA+pL+T/AP/aAAwDAQACAAMAAAAQkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAEkkkkgkkkkkkEkkkkEkkkkkEkkkkkkkkkkkkkkkkkkkkkkkkn//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QKf/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8QKf/EABwQAQEBAAMAAwAAAAAAAAAAAAERIQAwMSBQYP/aAAgBAQABPxD8Mkli7b0BcGbHlBcQZk8curQnWIrMQ65KuA4hoABfqyaIR0HYgWAMGvPIRb1flOXgVojrzpYqgUqiDsAifiCn9e1VMyFUHnT+lRMAsMysAAAj5jTsQIgnu/Z//9k=";
						numstats[0] ++;
						totalrolls ++;
						break;
					case(2):
						document.getElementById(id).src = "data:image/jpeg;base64,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";
						numstats[1] ++;
						totalrolls ++;
						break;
					case(3):
						document.getElementById(id).src = "data:image/jpeg;base64,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";
						numstats[2] ++;
						totalrolls ++;
						break;
					case(4):
						document.getElementById(id).src = "data:image/jpeg;base64,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";
						numstats[3] ++;
						totalrolls ++;
						break;
					case(5):
						document.getElementById(id).src = "data:image/jpeg;base64,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";
						numstats[4] ++;
						totalrolls ++;
						break;
					case(6):
						document.getElementById(id).src = "data:image/jpeg;base64,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";
						numstats[5] ++;
						totalrolls ++;
						break;
				}
			}
		}

		for (var i = 0; i<6; i++) {
			percentages[i] = Math.round((numstats[i]/totalrolls) * 100);
		}

		document.getElementById("1").innerHTML = percentages[0];
		document.getElementById("2").innerHTML = percentages[1];
		document.getElementById("3").innerHTML = percentages[2];
		document.getElementById("4").innerHTML = percentages[3];
		document.getElementById("5").innerHTML = percentages[4];
		document.getElementById("6").innerHTML = percentages[5];
		document.getElementById("total").innerHTML = totalrolls;
		document.getElementById("console").innerHTML = "";
		rolled = true;
		iRolls ++;
	}
}

function score() {
	if (iRolls > 0) {
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

		document.getElementById("console").innerHTML = scores;
		
		if (turn === "blue") {
			bluescore += scorecount;
			document.getElementById("bluescore").innerHTML = bluescore;
		}
		else if (turn === "red") {
				redscore += scorecount;
				document.getElementById("redscore").innerHTML = redscore;
		}
		else if (turn === "green") {
			greenscore += scorecount;
			document.getElementById("greenscore").innerHTML = greenscore;
		}
		else {
			yellowscore += scorecount;
			document.getElementById("yellowscore").innerHTML = yellowscore;
		}
		checkWinner();
		reset();
		toggleTurn();
	}
}

function checkPairs() {
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

function toggle(elem) {
	if (rolled === true) {
		switch(elem.id) {
			case "first":
				if (holds[0] === 0) {
					holds[0] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[0] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
			case "second":
				if (holds[1] === 0) {
					holds[1] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[1] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
			case "third":
				if (holds[2] === 0) {
					holds[2] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[2] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
			case "fourth":
				if (holds[3] === 0) {
					holds[3] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[3] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
			case "fifth":
				if (holds[4] === 0) {
					holds[4] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[4] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
			case "sixth":
				if (holds[5] === 0) {
					holds[5] = 1;
					elem.style.borderColor = "orange";
				}
				else {
					holds[5] = 0;
					elem.style.borderColor = "#1A661A";
				}
				break;
		}
	}
}

function hold(t) {
	toggle(t);
}

function reset() {
	rolled = false;
	dice = [];
	dicenums = [];
	iRolls = 0;
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i ++) {
		images[i].style.borderColor = "#1A661A";
		holds[i] = 0;
	}
	
	document.getElementById("first").src = "diceImages/Blank.png";
	document.getElementById("second").src = "diceImages/Blank.png";
	document.getElementById("third").src = "diceImages/Blank.png";
	document.getElementById("fourth").src = "diceImages/Blank.png";
	document.getElementById("fifth").src = "diceImages/Blank.png";
	document.getElementById("sixth").src = "diceImages/Blank.png";
}

function toggleTurn() {
	if (turn === "blue") {
		turn = "red";
		document.getElementById("blueavi").style.borderColor = "#1A661A";
		document.getElementById("redavi").style.borderColor = "orange";
	}
	else if (turn === "red") {
		if (numplayers === 3 || numplayers === 4) {
			turn = "green";
			document.getElementById("greenavi").style.borderColor = "orange";
			document.getElementById("redavi").style.borderColor = "#1A661A";
		}
		else {
			turn = "blue";
			document.getElementById("blueavi").style.borderColor = "orange";
			document.getElementById("redavi").style.borderColor = "#1A661A";
		}
	}
	else if (turn === "green") {
		if (numplayers === 4) {
			turn = "yellow";
			document.getElementById("yellowavi").style.borderColor = "orange";
			document.getElementById("greenavi").style.borderColor = "#1A661A";
		}
		else {
			turn = "blue";
			document.getElementById("blueavi").style.borderColor = "orange";
			document.getElementById("greenavi").style.borderColor = "#1A661A";
		}
	}
	else {
		turn = "blue";
		document.getElementById("blueavi").style.borderColor = "orange";
		document.getElementById("yellowavi").style.borderColor = "#1A661A";
	}
}

function checkWinner() {
	switch (turn) {
		case 'blue':
			if (bluescore >= maxscore) {
				alert(turn + " wins!");
			}
			break;
			
		case 'red':
			if (redscore >= maxscore) {
				alert(turn + " wins!");
			}
			break;
			
		case 'green':
			if (greenscore >= maxscore) {
				alert(turn + " wins!");
			}
			break;
			
			case 'yellow':
			if (yellowscore >= maxscore) {
				alert(turn + " wins!");
			}
			break;
		
		default:
			// code
	}
}