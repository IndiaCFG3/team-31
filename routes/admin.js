const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin_controller');

router.get('/', adminController.idle);

router.get('/home', adminController.home);

module.exports = router;