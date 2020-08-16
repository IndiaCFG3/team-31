const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth_controller');
router.get('/', authController.idle);

router.get('/signin', authController.signin);
router.get('/signout', authController.signout);

router.use('/users', require('./users'));
router.use('/admin', require('./admin'));
router.use('/viewer', require('./viewer'));

module.exports = router;