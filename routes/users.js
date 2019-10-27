module.exports = function(admin) {
  var express = require('express');
  var router = express.Router();

  /* GET users listing. */
  router.get('/', function (req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/create', (req, res, next) => {
      admin.auth().createUser({
        email: "galuu@ucsd.edu",
        emailVerified: false,
        password: "hunter2"
      }).then((userRecord) => {
          console.log('Successfully created new user:', userRecord.uid);
      });

      res.send("Successfully created new user");
  });

  return router;
}
