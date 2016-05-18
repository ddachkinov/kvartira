import passport from 'passport';
import {Strategy as TwitterStrategy} from 'passport-twitter';

export function setup(User, config) {
  passport.use(new TwitterStrategy({
    consumerKey: 'd20bA3HejqjNlxKO4pa3eMY6u',
    consumerSecret: 'M5aKGimqHxwRpflJ5EInfrKw4iPNhcM2VTYXwASP5G9Py5v3RT',
    callbackURL: 'oob'
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({'twitter.id': profile.id}).exec()
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'twitter',
          twitter: profile._json
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
