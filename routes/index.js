const express = require('express');

const router = express.Router();
const Message = require('../models/message');

function createMessage(text, user) {
  return {
    text,
    user,
    added: new Date(),
  };
}

/* GET home page. */
router.get('/', (req, res, next) => {
  Message.find({})
    .then((messages) => {
      res.render('index', {
        title: 'Mini Bulletin Board',
        messages,
      });
    }).catch((err) => next(err));
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Mini Bulletin Board - New Message' });
});

router.post('/new', (req, res, next) => {
  Message.create({
    user: req.body.username,
    text: req.body.messageText,
    added: Date.now(),
  }).then(() => {
    res.redirect('/');
  }).catch((err) => next(err));
});
module.exports = router;
