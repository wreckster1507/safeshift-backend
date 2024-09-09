const ShiftLog = require('../models/ShiftLog');

// Create a new shift log
exports.createShiftLog = async (req, res) => {
    try {
        const shiftLog = new ShiftLog(req.body);
        await shiftLog.save();
        res.status(201).json(shiftLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all shift logs
exports.getAllShiftLogs = async (req, res) => {
    try {
        const shiftLogs = await ShiftLog.find();
        res.status(200).json(shiftLogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific shift log by ID
exports.getShiftLogById = async (req, res) => {
    try {
        const shiftLog = await ShiftLog.findById(req.params.id);
        if (!shiftLog) return res.status(404).json({ error: 'Shift log not found' });
        res.status(200).json(shiftLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a shift log by ID
exports.updateShiftLog = async (req, res) => {
    try {
        const shiftLog = await ShiftLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!shiftLog) return res.status(404).json({ error: 'Shift log not found' });
        res.status(200).json(shiftLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a shift log by ID
exports.deleteShiftLog = async (req, res) => {
    try {
        const shiftLog = await ShiftLog.findByIdAndDelete(req.params.id);
        if (!shiftLog) return res.status(404).json({ error: 'Shift log not found' });
        res.status(200).json({ message: 'Shift log deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
