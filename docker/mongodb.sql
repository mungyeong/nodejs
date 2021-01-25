use nodejs
db.createUser({
	user:"nodejs",
	pwd:"nodejs1234567",
	roles:[{role:"dbOwner",db:"nodejs"}]
});

use nodejschat
db.createUser({
	user:"nodejschat",
	pwd:"nodejschat1234567",
	roles:[{role:"dbOwner",db:"nodejschat"}]
});