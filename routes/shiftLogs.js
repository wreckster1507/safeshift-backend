const express = require('express');
const router = express.Router();
const shiftLogController = require('../controllers/shiftLogController');

// Create a new shift log
router.post('/', shiftLogController.createShiftLog);

// Get all shift logs
router.get('/', shiftLogController.getAllShiftLogs);

// Get a specific shift log by ID
router.get('/:id', shiftLogController.getShiftLogById);

// Update a shift log by ID
router.put('/:id', shiftLogController.updateShiftLog);

// Delete a shift log by ID
router.delete('/:id', shiftLogController.deleteShiftLog);

module.exports = router;
