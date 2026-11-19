
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const trekData = {
  kudremukh: { name: 'Kudremukh Trek', price: 2499 },
  kodachadri: { name: 'Kodachadri Trek', price: 2299 },
  skandagiri: { name: 'Skandagiri Sunrise Trek', price: 1299 }
}

function Booking() {
  const { id } = useParams()
  const trek = trekData[id]

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: 1
  })

  if (!trek) {
    return (
      <main className="booking-page">
        <h2>Trek not found</h2>
        <Link to="/">Return Home</Link>
      </main>
    )
  }

  const total = trek.price * Number(form.participants)

  
async function handleSubmit(event) {
  event.preventDefault()

  try {
    const response = await fetch('http://localhost:5001/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
  trekName: trek.name,
  fullName: form.name,
  email: form.email,
  phone: form.phone,
  trekkingDate: form.date,
  participants: Number(form.participants),
  totalAmount: total
})
    })



    const data = await response.json()

    if (response.ok && data.success) {
      alert('Booking confirmed successfully!')
    } else {
      alert(data.message || 'Booking failed. Please try again.')
    }

  } catch (error) {
    console.error('Booking error:', error)
    alert('Cannot connect to server. Please try again.')
  }
}
function handleChange(event) {
  const { name, value } = event.target

  setForm(prev => ({
    ...prev,
    [name]: value
  }))
}


  
  return (
    <main className="booking-page">
      <Link to={`/trek/${id}`} className="back-link">
        ← Back to Trek Details
      </Link>

      <div className="booking-card">
        <h1>Book Your Adventure</h1>
        <p>Complete the form for {trek.name}</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Trekking Date</label>
          <input
            type="date"
            name="date"
            min={new Date().toLocaleDateString('en-CA')}
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>Number of Participants</label>
          <input
            type="number"
            name="participants"
            min="1"
            max="10"
            value={form.participants}
            onChange={handleChange}
            required
          />

          <div className="booking-total">
            <span>Total Amount</span>
            <strong>₹{total.toLocaleString('en-IN')}</strong>
          </div>

          <button type="submit" className="book-button">
            Continue Booking
          </button>
        </form>
      </div>
    </main>
  )
}

export default Booking
