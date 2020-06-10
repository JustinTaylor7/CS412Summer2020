const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/ps3', function(req, res, next) {
  res.render('index', { string: 'Hey now' });
});

router.post('/ps3', function(req, res, next) {
  res.send({
    string: req.body.inputString,
    len : req.body.inputString.length
  })
});
module.exports = router;
