const Booking = require('./models/Booking');
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('TrekVista Backend Server is Running!')
})

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'TrekVista API is working'
  })
})


app.post('/api/bookings', async (req, res) => {
    console.log('Booking data received:', req.body);
  try {
    const {
      trekName,
      fullName,
      email,
      phone,
      trekkingDate,
      participants,
      totalAmount
    } = req.body;

    if (
      !trekName || !fullName || !email ||
      !phone || !trekkingDate ||
      !participants || totalAmount == null
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    const booking = new Booking({
      trekName,
      fullName,
      email,
      phone,
      trekkingDate,
      participants,
      totalAmount
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'Booking saved successfully!',
      bookingId: booking._id
    });

  } catch (error) {
    console.error('Booking error:', error.message);

    res.status(500).json({
      success: false,
      message: 'Unable to save booking'
    });
  }
});

const PORT = process.env.PORT || 5001
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.error('MongoDB Connection Error:', err.message))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
