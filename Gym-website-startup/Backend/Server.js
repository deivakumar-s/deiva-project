const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 5000;
app.use(cors({
  orgin:"https://localhost:3000"  




    
}));

// Connect to your MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/edurekka');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Import your Form model
const Form = require('./Schemas/Form'); // Adjust the path as needed

// Define a route to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    // Create a new Form document from the request body
    const formData = new Form({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      gender: req.body.gender,
      comments: req.body.comments,
      timestamp: new Date().toISOString(), // You can adjust the timestamp format as needed
    });

    // Save the document to the database
    await formData.save();

    // Respond with a success message
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the form' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
