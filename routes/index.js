var express = require('express');
var router = express.Router();
const {
  index
} = require('../controllers/index');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admission_page');
});

router.post('/', index);

router.get('/dashboard', (req, res) => {
  res.render('admission_dashboard');
})

router.get('/apply', (req, res) => {
  res.render('admission_form');
})
module.exports = router;