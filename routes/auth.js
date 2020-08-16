const express = require("express");
const router = express.Router();
const {signin,signout} = require('../controllers/auth');
// router.get('/', authController.idle);

router.get('/signin', signin);
// router.get('/signout',signout);

// router.use('/users', require('./users'));
// router.use('/admin', require('./admin'));
// router.use('/viewer', require('./viewer'));

module.exports = router;