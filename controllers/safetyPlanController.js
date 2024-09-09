const SafetyPlan = require('../models/SafetyPlan');

// Create a new safety plan
exports.createSafetyPlan = async (req, res) => {
    const { planId, hazards, controls, responsibilities, complianceStatus } = req.body;
    try {
        const newPlan = new SafetyPlan({
            planId,
            hazards,
            controls,
            responsibilities,
            complianceStatus
        });
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all safety plans
exports.getAllSafetyPlans = async (req, res) => {
    try {
        const plans = await SafetyPlan.find();
        res.json(plans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a single safety plan
exports.getSafetyPlanById = async (req, res) => {
    try {
        const plan = await SafetyPlan.findById(req.params.id);
        if (!plan) return res.status(404).json({ error: 'Plan not found' });
        res.json(plan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
