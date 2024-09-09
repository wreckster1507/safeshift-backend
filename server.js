const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const shiftLogRoutes = require('./routes/shiftLogs');
const safetyPlanRoutes = require('./routes/safetyPlans');
const summarizeRoutes = require('./routes/summarizeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coal-mining', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shiftLogs', shiftLogRoutes);
app.use('/api/safetyPlans', safetyPlanRoutes);
app.use('/api', summarizeRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
