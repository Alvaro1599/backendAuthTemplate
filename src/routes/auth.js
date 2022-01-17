const { Router } = require('express');
const router = Router();
const passport = require('passport');
const jwt = require('../controllers/jwt');
const ver = require('../middleware/jwt');
router.get('/user', ver, (req, res) => {
	//there is goin to a new logic
	//remember add middleware to all routes that need to be protected
	//ver is middleware that verifies the token
	res.send('user');
});
router.get('/login', (req, res) => {
	//there is goin to a new logic
	//remember add middleware to all routes that need to be protected
	res.send('asdasdasasdasdd');
});
router.get('/auth/google', passport.authenticate('google', { scope: [ 'profile' ] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
	const jwtTOken = jwt.generateToken(req.session.passport.user._json);
	console.log(jwtTOken);
	res.status(200).header('jwt', jwtTOken);
});
module.exports = router;
