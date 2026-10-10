
import { useEffect, useState } from "react";
import "./App.css";

const initialForm = {
  name: "",
  email: "",
  department: "",
  year: "",
};

const events = [
  {
    id: 1,
    icon: "💡",
    category: "HACKATHON",
    title: "AI Innovation Challenge",
    date: "18 OCT 2026",
    time: "09:00 AM",
    venue: "Innovation Lab",
    description:
      "Build creative AI solutions and turn your ideas into real-world projects.",
  },
  {
    id: 2,
    icon: "💻",
    category: "TECHNOLOGY",
    title: "CodeCraft Contest",
    date: "24 OCT 2026",
    time: "10:00 AM",
    venue: "Computer Lab 2",
    description:
      "Test your programming skills through exciting coding challenges.",
  },
  {
    id: 3,
    icon: "🚀",
    category: "PROJECT EXPO",
    title: "FutureTech Expo",
    date: "02 NOV 2026",
    time: "11:00 AM",
    venue: "Main Auditorium",
    description:
      "Showcase innovative student projects and explore future technologies.",
  },
  {
    id: 4,
    icon: "🎤",
    category: "WORKSHOP",
    title: "Tech Talk 2026",
    date: "10 NOV 2026",
    time: "02:00 PM",
    venue: "Seminar Hall",
    description:
      "Learn from industry experts and discover new career opportunities.",
  },
  {
    id: 5,
    icon: "🏆",
    category: "COMPETITION",
    title: "Campus Battle",
    date: "18 NOV 2026",
    time: "09:30 AM",
    venue: "College Ground",
    description:
      "Compete with talented students and prove your skills.",
  },
  {
    id: 6,
    icon: "🎨",
    category: "CREATIVE",
    title: "Design Sprint",
    date: "25 NOV 2026",
    time: "01:00 PM",
    venue: "Design Studio",
    description:
      "Create beautiful digital experiences and solve creative challenges.",
  },
];

const departments = [
  "Information Technology",
  "Computer Science Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
];

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const openRegistration = (event) => {
    setForm({ ...initialForm });
    setSuccessMessage("");
    setSelectedEvent(event);
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
    setSuccessMessage("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedEvent) return;

    // Demo only: connect your backend API to save registrations.
    setSuccessMessage(
      `Thank you, ${form.name.trim()}! Your registration for ${selectedEvent.title} has been received in this demo.`
    );

    setForm({ ...initialForm });
  };

  useEffect(() => {
    if (!selectedEvent) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeRegistration();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" aria-label="CampusSpark home">
          <div className="brand-mark">CS</div>

          <div>
            <h2>CampusSpark</h2>
            <span>College Event Hub</span>
          </div>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#events" className="nav-button">
            Explore Events <span>↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="small-label">
              ✦ YOUR CAMPUS. YOUR MOMENTS.
            </div>

            <h1>
              Make Your
              <br />
              <span>Campus</span>
              <br />
              Experience
              <br />
              Unforgettable.
            </h1>

            <p>
              Discover exciting events, meet talented people,
              learn new skills and create memories that last.
            </p>

            <div className="hero-buttons">
              <a href="#events" className="primary-button">
                Discover Events <span>→</span>
              </a>

              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>25+</strong>
                <span>Events</span>
              </div>

              <div>
                <strong>1K+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>15+</strong>
                <span>Clubs</span>
              </div>
            </div>
          </div>

          {/* SPACE-THEMED ILLUSTRATION */}
          <div className="hero-right">
            <div className="yellow-circle" />

            <div className="floating-card card-one">
              <span>🔥</span>
              <div>
                <strong>Trending Now</strong>
                <small>AI Innovation Challenge</small>
              </div>
            </div>

            <div className="main-illustration">
              <div className="illustration-top">CAMPUS</div>
              <div className="illustration-icon">🎓</div>

              <h3>
                Learn.
                <br />
                Build.
                <br />
                Shine.
              </h3>
            </div>

            <div className="floating-card card-two">
              <span>✓</span>
              <div>
                <strong>Easy Registration</strong>
                <small>Join events in seconds</small>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="events-section" id="events">
          <div className="section-top">
            <div>
              <div className="small-label">✦ WHAT'S HAPPENING</div>

              <h2>
                Events worth
                <span> showing up for.</span>
              </h2>
            </div>

            <p>
              From coding challenges to creative workshops,
              find something that matches your passion.
            </p>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-icon">{event.icon}</div>

                <div className="event-category">
                  {event.category}
                </div>

                <h3>{event.title}</h3>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-details">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.venue}</span>
                </div>

                <button
                  type="button"
                  className="event-button"
                  onClick={() => openRegistration(event)}
                  aria-label={`Register for ${event.title}`}
                >
                  Register Now <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-box">
            <div className="about-number">01</div>

            <div className="about-content">
              <div className="small-label">
                ✦ WHY CAMPUSPARK?
              </div>

              <h2>
                More than events.
                <br />
                <span>It's your campus story.</span>
              </h2>

              <p>
                CampusSpark brings college events into one simple
                platform. Discover what's happening, register for
                events and participate with your friends.
              </p>

              <div className="about-features">
                <div>
                  <b>01</b>
                  <strong>Discover</strong>
                  <span>Find events you love.</span>
                </div>

                <div>
                  <b>02</b>
                  <strong>Register</strong>
                  <span>Submit your details easily.</span>
                </div>

                <div>
                  <b>03</b>
                  <strong>Participate</strong>
                  <span>Make memories together.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLEGE INFORMATION */}
        <section className="college-section">
          <div>
            <span>COLLEGE COMMUNITY</span>
            <h2>Mahendra College of Engineering</h2>
            <p>Department of Information Technology</p>
          </div>

          <div className="college-badge">
            <span>🎓</span>
            <strong>CampusSpark</strong>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-mark">CS</div>

            <div>
              <h3>CampusSpark</h3>
              <p>Mahendra College of Engineering</p>
              <p>Department of Information Technology</p>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CampusSpark. All rights reserved.</span>
          <span>
            Created by <strong>DURGA S_III-yr_INFORMATION TECHNOLOGY</strong> ✦
          </span>
        </div>
      </footer>

      {/* REGISTRATION MODAL */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeRegistration();
            }
          }}
        >
          <section
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <button
              type="button"
              className="close-button"
              onClick={closeRegistration}
              aria-label="Close registration"
            >
              ×
            </button>

            {successMessage ? (
              <div className="registration-success" role="status">
                <div className="modal-icon">✓</div>

                <div className="small-label">
                  REGISTRATION STATUS
                </div>

                <h2 id="registration-title">Thank you!</h2>

                <p>{successMessage}</p>

                <button
                  type="button"
                  className="modal-submit"
                  onClick={closeRegistration}
                >
                  Done <span>→</span>
                </button>
              </div>
            ) : (
              <>
                <div className="modal-icon">
                  {selectedEvent.icon}
                </div>

                <div className="small-label">
                  EVENT REGISTRATION
                </div>

                <h2 id="registration-title">Join the event.</h2>

                <p className="modal-event">
                  {selectedEvent.title}
                </p>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="registration-name">
                    Full Name
                  </label>

                  <input
                    id="registration-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />

                  <label htmlFor="registration-email">
                    Email Address
                  </label>

                  <input
                    id="registration-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />

                  <label htmlFor="registration-department">
                    Department
                  </label>

                  <select
                    id="registration-department"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select department</option>

                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="registration-year">
                    Year
                  </label>

                  <select
                    id="registration-year"
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select year</option>

                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <button type="submit" className="modal-submit">
                    Complete Registration <span>→</span>
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;