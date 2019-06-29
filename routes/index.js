var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/check', function(req, res, next) {
  if (req.body.username === 'taken') {
    return res.status(400).json({
      "errors": {
        "username": {
          "code": "already_taken",
          "message": "This name is already taken."
        }
      }
    });
  }
  res.json({ok: true});
});


router.post('/signup', function(req, res, next) {
  console.log(req.body.username);
  setTimeout(() => {
    if (req.body.username === 'taken') {
      return res.status(400).json({
        "errors": {
          "username": {
            "code": "already_taken",
            "message": "This name is already taken."
          }
        }
      });
    }
    if (req.body.username === 'throttle') {
      return res.status(429).json({
        "errors": {
          "non_field_errors": {
            "code": "throttle",
            "message": "You request was throttled. Please try again in 56 sec."
          }
        }
      });
    }
    if (req.body.username === '500') {
      return res.status(500).json({});
    }
    res.json({ok: true});
  }, 1500);
});

module.exports = router;
