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

  return router;
};
//module.exports = router;
