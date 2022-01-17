const passport = require('passport');
const strategy = require('passport-google-oauth20').Strategy;
const user = require('../models/user');
module.exports = function() {
	passport.use(
		new strategy(
			{
				clientID: '219415381778-0i232b3rrodpup91vekchl39a4k93bmc.apps.googleusercontent.com',
				clientSecret: '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',
				callbackURL: 'http://localhost:4000/auth/google/callback'
			},
			async function(accessToken, refreshToken, profile, cb) {
				const { sub, given_name, family_name } = profile._json;
				const data = await user.findByPk(sub.toString());
				if (data) {
					return cb(null, profile);
				}
				return cb(null, null);
			}
		)
	);
	passport.serializeUser((user, cb) => {
		cb(null, user);
	});
	passport.deserializeUser((obj, cb) => {
		cb(null, obj);
	});
};
