const express = require("express");
const router = express.Router();
const viewerController = require('../controllers/viewer_controller');

// router.get('/', viewerController.idle);

router.get('/home', viewerController.home);

module.exports = router;