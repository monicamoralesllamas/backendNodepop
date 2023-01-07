var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.bienvenida = 'Welcome';
  res.locals.name = "Mónica"; 

  res.locals.anuncios = [
        {
        "nombre": "Bicicleta",
        "venta": true,
        "precio": 230.15,
        "foto": "bici.jpg",
        "tags": [ "lifestyle", "motor"]
        },
        {
        "nombre": "iPhone 3GS",
        "venta": false,
        "precio": 50.00,
        "foto": "iphone.png",
        "tags": [ "lifestyle", "mobile"]}
      ];

  res.render('index', { title: 'Nodepop' });
});

router.post('/en_el_body', (req,res,next) => {
  console.log(req.body);
  res.send('ok');
})

module.exports = router;
