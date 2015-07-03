/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');
module.exports = {
  login: function (req,res)
  {
    res.view();
  },

  passport_local: function(req, res)
  {
    console.log("req--"+req.user);
    console.log("res--"+req.password);
    passport.authenticate('local', function(err, user, info)
    {
      console.log(err);
      console.log(user);
      if ((err) || (!user))
      {
        //res.redirect('/user/login');
        res.json({'err1':err});
        return;
      }

      req.logIn(user, function(err)
      {
        if (err)
        {
          //res.redirect('/user/login');
          res.json({'err2':err});
          return;
        }

        res.redirect('/');
        return;
      });
    })(req, res);
  },

  logout: function (req,res)
  {
    req.logout();
    res.redirect('/');
  },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}


};

