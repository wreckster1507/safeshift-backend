const mongoose = require('mongoose');

const SafetyPlanSchema = new mongoose.Schema({
    planId: { type: String, required: true },
    hazards: { type: String, required: true },
    controls: { type: String, required: true },
    responsibilities: { type: String, required: true },
    complianceStatus: { type: String },
});

module.exports = mongoose.model('SafetyPlan', SafetyPlanSchema);
