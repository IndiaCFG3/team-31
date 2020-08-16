const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth_controller');
router.get('/', authController.idle);

router.get('/signin', authController.signin);
router.get('/signout', authController.signout);
module.exports = router;