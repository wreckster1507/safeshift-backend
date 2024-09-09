const mongoose = require('mongoose');

const shiftLogSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    shift: { type: String, required: true },
    productionData: {
        totalTonnageMined: { type: Number },
        activeMachines: { type: String },
        machineDowntime: { type: String },
        additionalNotes: { type: String }
    },
    safetyReports: {
        incidents: { type: String },
        nearMisses: { type: String },
        hazardsIdentified: { type: String }
    },
    workProgress: {
        completedTasks: { type: String },
        ongoingWork: { type: String },
        upcomingWork: { type: String }
    },
    machineStatus: {
        excavator: { type: String },
        conveyor: { type: String },
        crusher: { type: String }
    },
    personnelInformation: {
        shiftSupervisor: { type: String },
        keyPersonnelChanges: { type: String }
    },
    notesForIncomingShift: { type: String },
    signedBy: { type: String },
    time: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('ShiftLog', shiftLogSchema);
