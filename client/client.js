Session.set("popup", "login");
Session.set("pageDisplay", "index");
Session.set("cell", "cell1");
Session.set("inGame", false);

if(Meteor.user() !== null) {
	Session.set("popup", "logout");
}
else {
	Session.set("popup", "login");
}

