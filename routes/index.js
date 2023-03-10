var express = require('express');
var router = express.Router();

function createMessage(text, user) {
  return {
    text,
    user,
    added: new Date(),
  }
}

const messages = [
  createMessage('Hello World!', 'Sun'),
  createMessage('First?!?', 'Moon'),
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Bulletin Board',  
    messages
  });
});

router.get('/new', function(req,res, next) {
  res.render ('form', {title: 'Mini Bulletin Board - New Message'});
});

router.post('/new', function(req,res,next){
  messages.push(createMessage(req.body.messageText, req.body.username))
  res.redirect('/')
})
module.exports = router;
