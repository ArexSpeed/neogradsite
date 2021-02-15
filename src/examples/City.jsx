import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './City.css';

const City = () => {
  const [hide, setHide] = useState(false)
  return (
    <section className="hero-city">
      <nav className="navbar-city-top">
        <div class="hamburger-menu" onClick={() => setHide(!hide)}>
          <span class="bar"></span>
        </div>
        <div className="nav-logo">CityLook</div>
      </nav>
      <nav className={`navbar-city ${hide ? "hide" : ""}`}>
        <ul className="city-menu">
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darkgreen">
            Best places
          </button>
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darkblue">
            Theaters
          </button>
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darkgold">
            Restaurants
          </button>
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darksilver">
            Sightseeing
          </button>
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darkviolet">
            Tickets
          </button>
          <button class="btn btn-rect-long-6 btn-round-5-right btn-slide-left color-darkred">
            Travel
          </button>
        </ul>
        <div className="nav-link">
          <Link to="/">NeoGrad</Link>
        </div>
      </nav>
      <main className="main-city">
        <h1 className="city-title">Discover your city once again!</h1>
        <h4 className="city-subtitle">
          Find the best places, restaurant and more in our beautiful city!
        </h4>
        <div className="city-button">
          <button class="btn btn-rect-5 btn-round-5 btn-pulse-fast color-neonblue">
            Free Ticket
          </button>
        </div>
      </main>
    </section>
  );
}

export default City
