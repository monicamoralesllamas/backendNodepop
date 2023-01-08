var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.bienvenida = 'Welcome to Nodepop';
  res.locals.name = "Mónica"; 


  res.render('index', { title: 'Nodepop' });
});

router.post('/en_el_body', (req,res,next) => {
  console.log(req.body);
  res.send('ok');
})

module.exports = router;
