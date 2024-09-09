const express = require('express');
const router = express.Router();
const safetyPlanController = require('../controllers/safetyPlanController');

// Create a new safety plan
router.post('/', safetyPlanController.createSafetyPlan);

// Get all safety plans
router.get('/', safetyPlanController.getAllSafetyPlans);

// Get a single safety plan
router.get('/:id', safetyPlanController.getSafetyPlanById);

module.exports = router;
