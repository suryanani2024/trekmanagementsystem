
import { Link, useParams } from 'react-router-dom'

const treks = {
  kudremukh: {
    name: 'Kudremukh Trek',
    location: 'Chikkamagaluru, Karnataka',
    difficulty: 'Moderate',
    duration: '2 Days',
    price: 2499,
    description: 'Explore the beautiful green landscapes and mountain views of Kudremukh in the Western Ghats.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200'
  },
  kodachadri: {
    name: 'Kodachadri Trek',
    location: 'Shivamogga, Karnataka',
    difficulty: 'Moderate',
    duration: '2 Days',
    price: 2299,
    description: 'Experience lush forests, scenic mountain trails and breathtaking views at Kodachadri.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200'
  },
  skandagiri: {
    name: 'Skandagiri Sunrise Trek',
    location: 'Chikkaballapur, Karnataka',
    difficulty: 'Easy',
    duration: '1 Day',
    price: 1299,
    description: 'Enjoy an early morning adventure and watch the sunrise from the beautiful Skandagiri hills.',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200'
  }
}

function TrekDetails() {
  const { id } = useParams()
  const trek = treks[id]

  if (!trek) {
    return (
      <div className="details-page">
        <h2>Trek not found</h2>
        <Link to="/">Return Home</Link>
      </div>
    )
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="details-card">
        <img src={trek.image} alt={trek.name} />

        <div className="details-content">
          <span className="difficulty">{trek.difficulty}</span>
          <h1>{trek.name}</h1>
          <p>📍 {trek.location}</p>
          <p>🕒 Duration: {trek.duration}</p>

          <h3>About This Trek</h3>
          <p>{trek.description}</p>

          <h2>₹{trek.price.toLocaleString('en-IN')}</h2>
          <p>Per person — sample price</p>

          <Link to={`/booking/${id}`} className="book-button">
            Book Now
            </Link>
        </div>
      </div>
    </div>
  )
}

export default TrekDetails
