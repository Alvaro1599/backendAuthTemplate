const { Router } = require('express');
const router = Router();
const passport = require('passport');
const jwt = require('../controllers/jwt');
const ver = require('../middleware/jwt');
router.get('/user', ver, (req, res) => {
	res.send('user');
});
router.get('/login', (req, res) => {
	res.send('asdasdasasdasdd');
});
router.get('/auth/google', passport.authenticate('google', { scope: [ 'profile' ] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
	const jwtTOken = jwt.generateToken(req.session.passport.user._json);
	console.log(jwtTOken);
	res.status(200).header('jwt', jwtTOken);
});
module.exports = router;
