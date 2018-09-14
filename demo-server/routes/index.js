var express = require('express');
var router = express.Router();
var cors = require('cors')
var http = require('http')
var proxy = require('http-proxy-middleware');



router.use('/api', proxy(
  {
  target: 'http://localhost:3005',
   changeOrigin: true,
   pathRewrite:{
     '/api':'/'
   }
  }
));
// const corsOptions = {
//   origin: 'http://localhost:8080',
//   credentials: true
// }
// router.use(cors(corsOptions))
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.all('*',(req, res,next)=>{
//   res.header('Access-Control-Allow-Credentials',true)
//   res.header('Access-Control-Allow-Origin','http://localhost:8080')
//   res.header('Access-Control-Allow-Headers','content-type')
//   res.header('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS')
//   next()
// })


router.get('/getJsonp',(req,res)=> {
  
  res.jsonp({
    data:'吃饭',
    msg:'吃饭睡觉打代码',
    code:200
  })
})

router.get('/getMsg',(req,res)=> {
  // res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({
    data:'吃饭',
    msg:'吃饭睡觉打代码',
    code:200
  })
})

router.post('/nosimple',(req,res)=> {
  // res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({
    data:'吃饭',
    msg:'吃饭睡觉打代码',
    code:200
  })
})

router.get('/proxy',(req, response) => {
  http.get('http://localhost:3005/demo2', function(res) {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        response.json(parsedData)
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  
})
module.exports = router;
