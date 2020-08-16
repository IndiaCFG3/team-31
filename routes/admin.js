const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.idle);

router.get('/home', adminController.home);

module.exports = router;