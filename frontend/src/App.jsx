import Booking from './pages/Booking'
import { Routes, Route, Link } from 'react-router-dom'
import TrekDetails from './pages/TrekDetails'
import './App.css'

const treks = [
  {
    id: 'kudremukh',
    name: 'Kudremukh Trek',
    location: 'Chikkamagaluru, Karnataka',
    difficulty: 'Moderate',
    duration: '2 Days',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900'
  },
  {
    id: 'kodachadri',
    name: 'Kodachadri Trek',
    location: 'Shivamogga, Karnataka',
    difficulty: 'Moderate',
    duration: '2 Days',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900'
  },
  {
    id: 'skandagiri',
    name: 'Skandagiri Sunrise Trek',
    location: 'Chikkaballapur, Karnataka',
    difficulty: 'Easy',
    duration: '1 Day',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900'
  }
]

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
      <header className="navbar">
        <a href="#" className="logo">⛰ TrekVista</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#treks">Explore Treks</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">YOUR NEXT ADVENTURE STARTS HERE</span>
          <h1>Explore the Wild.<br />Discover Yourself.</h1>
          <p>
            Discover breathtaking trekking destinations,
            plan your journey and create unforgettable memories.
          </p>
          <a href="#treks" className="primary-button">
            Explore Treks →
          </a>
        </div>
      </section>

      <section className="treks-section" id="treks">
        <div className="section-heading">
          <span className="eyebrow">DISCOVER YOUR ADVENTURE</span>
          <h2>Popular Treks</h2>
          <p>Find your perfect escape into nature.</p>
        </div>

        <div className="trek-grid">
          {treks.map((trek) => (
            <article className="trek-card" key={trek.name}>
              <img src={trek.image} alt={trek.name} />
              <div className="trek-info">
                <span className="difficulty">{trek.difficulty}</span>
                <h3>{trek.name}</h3>
                <p>📍 {trek.location}</p>
                <p>🕒 {trek.duration}</p>
                <div className="trek-footer">
                  <strong>₹{trek.price.toLocaleString('en-IN')}</strong>
                  <span>per person</span>
                </div>
                
                  <Link
  to={`/trek/${trek.id}`}
  className="book-button"
>
  View Details
                    </Link>

              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>Why TrekVista?</h2>
        <p>
          TrekVista helps adventurers discover trekking destinations,
          explore routes and plan their next outdoor experience.
        </p>
      </section>

      <footer>
        <p>© 2026 TrekVista | Trek Management System</p>
            </footer>
    </div>
      } />
      <Route path="/trek/:id" element={<TrekDetails />} />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  )
}

export default App
