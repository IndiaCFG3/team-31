const express = require("express");
const router = express.Router();
const workerController = require('../controllers/worker');

// router.get('/', workerController.idle);

router.get('/home', workerController.home);

module.exports = router;