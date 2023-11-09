const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 5000;
app.use(cors({
  orgin:"https://localhost:3000"  




    
}));

mongoose.connect('mongodb://0.0.0.0:27017/edurekka');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
Import your Form model
const Form = require('./Schemas/Form');

 Define a route to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new Form({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      gender: req.body.gender,
      comments: req.body.comments,
      timestamp: new Date().toISOString(), 
    });

    await formData.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the form' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
