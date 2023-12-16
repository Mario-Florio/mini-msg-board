var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toUTCString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toUTCString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: 'Mini Messageboard',
      messages: messages
    });
});

router.post('/new', function(req, res, next) {
  const { user, message } = req.body;
  const newMessage = { user, text: message, added: new Date().toUTCString() }
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
