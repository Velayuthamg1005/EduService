const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const personalInfoRoutes = require('./src/routes/personalInfoRoutes');
const recommendationsRoutes = require('./src/routes/recommendationsRoutes');
const roadmapRoutes = require('./src/routes/roadmapRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/consultancyApp', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('connected', () => {
  console.log('Connected to MongoDB');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/users', userRoutes);
app.use('/api/personal-info', personalInfoRoutes);
app.use('/api/recommendations', recommendationsRoutes);
app.use('/api/roadmap', roadmapRoutes);
app.use('/api/admin', adminRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
