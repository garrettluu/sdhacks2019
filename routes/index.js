module.exports = function(db) {
  var express = require('express');
  var router = express.Router();

  router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });

  /* test putting something in the database */
  router.get('/testdb', (req, res, next) => {
    let docRef = db.collection('users').doc('alovelace');

    let setAda = docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });

    res.send(req);
  });

  /* creates a listing with the specified info */
  router.get('/createlisting', (req, res, next) => {
    let listingsRef = db.collection('listings').doc(req.body.title);

    let createListing = listingsRef.set({
      name: req.body.name,
      class: req.body.name,
      location: req.body.location,
      time: req.body.time
    });
  });

  return router;
};
//module.exports = router;
