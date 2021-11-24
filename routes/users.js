var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");




/* Login User. */
router.post('/login', function(req, res, next) {
  
  const token = jwt.sign(
    { user_id: 10, email: 'commentariosweb@gmail.com' },
    'sdfsdfsdfsd5f342342rfw3424242342342344',
    {
      expiresIn: "2h",
    }
  );
  
  let user = {};
  // save user token
  user.token = token;

  // user
  res.status(200).json(user);
});

module.exports = router;
