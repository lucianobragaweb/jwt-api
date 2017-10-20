var express = require('express');
var router = express.Router();

// JWT

var jwt = require('jsonwebtoken')
/*
Receive email and password
find users
generate token
 */
router.post('/login', (req, res, next) => {
  const { email, password } = req.body.userData

  if (email === undefined || password === undefined) {
    res.status(401).json({
      success: false,
      code: 'DD101_API_ERROR_01',
      message: "Email and/or password invalid"
    })
  } else {
    let tokenData = {
      id: 101
    }
    let generatedToken = jwt.sign(tokenData, 'somepass', { expiresIn: '1m'})
    res.json({
      success: true,
      token: generatedToken
    })
  }
});

module.exports = router;
