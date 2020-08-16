const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth');
router.get('/', authController.idle);

router.get('/signin', authController.signin);
router.post('/create-session', authController.createSession);
router.get('/signup', authController.signup);
// router.get('/signout', authController.signout);

router.use('/worker', require('./worker'));
// router.use('/admin', require('./admin'));
// router.use('/viewer', require('./viewer'));

module.exports = router;