const jwt = require('jsonwebtoken');

function generateToken(user) {
	return jwt.sign({ name: user.given_name, lastName: user.family_name }, 'holaaaaaa', { expiresIn: '3h' });
}
function verifyToken(token) {
	return jwt.verify(token, 'holaaaaaa');
}
module.exports = { generateToken, verifyToken };
