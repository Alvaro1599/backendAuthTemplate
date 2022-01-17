const jwt = require('../controllers/jwt');
const ver = (req, res, next) => {
	console.log(req.headers.jwt);
	try {
		if (jwt.verifyToken(req.headers.jwt)) {
			next();
		} else {
			res.status(400).send(error);
		}
	} catch (error) {
		res.status(400).send('invalid token');
	}
};

module.exports = ver;
