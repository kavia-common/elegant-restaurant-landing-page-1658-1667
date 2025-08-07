import React, { useState, useEffect } from 'react';
import './App.css';

// Accent color palette from requirements.
const COLORS = {
  primary: "#b22222",
  secondary: "#fffaf0",
  accent: "#ffd700",
};

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 className="hero__title">Elegant Restaurant</h1>
        <p className="hero__subtitle">
          Experience delightful cuisine in a modern, inviting ambiance.
        </p>
        <a href="#reservation" className="btn btn--accent">
          Book a Table
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  // Example image URLs (replace with your own or use stock image links)
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a1400?auto=format&fit=crop&w=600&q=80"
  ];
  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery__grid">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`Restaurant ambiance ${i + 1}`} loading="lazy"/>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  // Example menu structure.
  const menu = [
    {
      category: "Starters",
      items: [
        { name: "Bruschetta", description: "Grilled bread, garlic, tomatoes & basil", price: 9 },
        { name: "Caprese Salad", description: "Mozzarella, tomatoes, fresh basil, olive oil", price: 12 }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Seared Salmon", description: "Fresh salmon, herbed potatoes, lemon butter", price: 21 },
        { name: "Roast Chicken", description: "Herb-marinated chicken, seasonal vegetables", price: 18 }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert with coffee & cocoa", price: 8 },
        { name: "Panna Cotta", description: "Vanilla cream pudding, berry compote", price: 7 }
      ]
    }
  ];

  return (
    <section className="menu" id="menu">
      <h2 className="section-title">Menu</h2>
      <div className="menu__categories">
        {menu.map((cat, i) => (
          <div key={cat.category} className="menu__category">
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((item, j) => (
                <li key={j}>
                  <span className="menu-item__name">{item.name}</span>
                  <span className="menu-item__dots"></span>
                  <span className="menu-item__price">${item.price}</span>
                  <div className="menu-item__desc">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReservationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    party: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: pretend to submit
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({
      name: '',
      email: '',
      date: '',
      time: '',
      party: '',
      message: ''
    });
  };

  return (
    <section className="reservation" id="reservation">
      <h2 className="section-title">Reserve a Table</h2>
      <form className="reservation__form" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="form__input"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          className="form__input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="form__input"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          className="form__input"
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <input
          className="form__input"
          type="number"
          name="party"
          value={form.party}
          onChange={handleChange}
          placeholder="Number of guests"
          min="1"
          required
        />
        <textarea
          className="form__textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Special requests"
          rows="2"
        />
        <button type="submit" className="btn btn--primary" disabled={submitted}>
          {submitted ? "Reservation Sent!" : "Reserve"}
        </button>
      </form>
    </section>
  );
}

function ContactAndMap() {
  return (
    <section className="contact" id="contact">
      <div className="contact__info">
        <h2 className="section-title">Contact & Location</h2>
        <p>
          <span role="img" aria-label="address">📍</span> 123 Main Street, Foodie City, CA
        </p>
        <p>
          <span role="img" aria-label="phone">📞</span> (555) 123-4567
        </p>
        <p>
          <span role="img" aria-label="email">✉️</span> reservations@elegant-restaurant.com
        </p>
      </div>
      <div className="contact__map-wrapper">
        <iframe
          className="contact__map"
          title="Google Map location"
          src="https://maps.google.com/maps?q=123%20Main%20Street%20Foodie%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

function NavBar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  // PUBLIC_INTERFACE
  const handleNav = () => setMobileOpen((o) => !o);
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="#home">Elegant</a>
      </div>
      <button
        className="navbar__toggle"
        aria-label="Toggle navigation"
        onClick={handleNav}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navbar__links${mobileOpen ? " open" : ""}`}>
        <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
        <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
        <a href="#reservation" onClick={() => setMobileOpen(false)}>Reservation</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      {mobileOpen && (
        <div className="navbar__backdrop" onClick={() => setMobileOpen(false)}></div>
      )}
    </nav>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <div className="App" style={{ background: COLORS.secondary }}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <ReservationForm />
        <ContactAndMap />
      </main>
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} Elegant Restaurant. All rights reserved.
        </div>
        <div>
          Designed with <span style={{ color: COLORS.accent, fontWeight: 700 }}>♥</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
