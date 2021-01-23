use nodejs
db.createUser({
	user:"nodejs",
	pwd:"nodejs1234567",
	roles:[{role:"dbOwner",db:"nodejs"}]
});