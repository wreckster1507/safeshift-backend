const express = require('express');
const router = express.Router();
const summarizeController = require('../controllers/summarizeController');

// Define the /summarize route
router.post('/summarize', summarizeController.summarizeShiftLogs);


module.exports = router;
