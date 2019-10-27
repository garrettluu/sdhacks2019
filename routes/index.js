module.exports = function(db) {
  var express = require('express');
  var router = express.Router();

  router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });

  /* test putting something in the database */
  router.get('/testdb', (req, res, next) => {
    let docRef = db.collection('test').doc('alovelace');

    let setAda = docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });

    res.send("Successfully updated test database");
  });

  router.get('/getlistings', async (req, res, next) => {
    var listingArray = [];
    let listingsRef = db.collection('listings');
    let allListings = await listingsRef.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            listingArray.push({
                title: doc.id,
                data: doc.data(),
            });
            console.log(doc.data());
          })
        });
    res.send(listingArray);
  });

  /* creates a listing with the specified info */
  router.post('/createlisting', (req, res, next) => {
    let listingsRef = db.collection('listings').doc(req.body.title);

    let createListing = listingsRef.set({
      name: req.body.name,
      course: req.body.course,
      location: req.body.location,
      time: req.body.time
    });

    res.send(req.body);

    res.send("Successfully posted test entry");
  });

  router.post('/getstakks', async (req, res) => {
      let stakksRef = db.collection('stakks').doc(req.body.uid);

      let allStakks = await stakksRef.get()
          .then(doc => {
            console.log(doc.data());
          })
  });

  return router;
};
//module.exports = router;
