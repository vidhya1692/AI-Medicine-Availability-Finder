import { useState } from "react";
import "./App.css";

function App() {
  const [medicine, setMedicine] = useState("");
  const [searchedMedicine, setSearchedMedicine] = useState("");

  const popularMedicines = [
    "Paracetamol",
    "Amoxicillin",
    "Salbutamol",
    "ORS",
    "Cetirizine",
  ];

  const pharmacies = [
    {
      name: "MedPlus Pharmacy",
      distance: "0.8 km away",
      stock: "In stock",
    },
    {
      name: "Apollo Pharmacy",
      distance: "1.4 km away",
      stock: "In stock",
    },
    {
      name: "City Care Pharmacy",
      distance: "2.1 km away",
      stock: "Low stock",
    },
  ];

  const handleSearch = () => {
    if (!medicine.trim()) {
      alert("Please enter a medicine name.");
      return;
    }

    setSearchedMedicine(medicine);
  };

  const selectMedicine = (name) => {
    setMedicine(name);
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo-section">
          <div className="logo">♡</div>

          <div className="brand">
            <h2>MedNear</h2>

            <p>calm medicine finder</p>
          </div>
        </div>

        <nav>
          <a href="#find">Find medicine</a>

          <a href="#pharmacy">Pharmacy stock</a>

          <a href="#about">About</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <main>
        <section className="hero" id="find">
          <div className="hero-content">
            <h1>
              Find medicine <span>near you.</span>
            </h1>

            <p className="hero-text">
              Search a medicine name and MedNear checks nearby pharmacies for
              what's actually on the shelf right now — no calling around.
            </p>

            {/* SEARCH BAR */}

            <div className="search-wrapper">
              <div className="search-icon">⌕</div>

              <input
                type="text"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search a medicine, e.g. Paracetamol 650 mg"
              />

              <button onClick={handleSearch}>Check stock</button>
            </div>

            {/* POPULAR MEDICINES */}

            <div className="popular">
              <span>POPULAR</span>

              {popularMedicines.map((item) => (
                <button
                  key={item}
                  onClick={() => selectMedicine(item)}
                  className="medicine-chip"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* ================= RESULTS ================= */}

            {searchedMedicine && (
              <section className="results">
                <div className="results-header">
                  <div>
                    <p className="results-small">PHARMACY AVAILABILITY</p>

                    <h2>{searchedMedicine}</h2>
                  </div>

                  <div className="location">📍 Nearby pharmacies</div>
                </div>

                <div className="pharmacy-list">
                  {pharmacies.map((pharmacy) => (
                    <div className="pharmacy" key={pharmacy.name}>
                      <div>
                        <h3>{pharmacy.name}</h3>

                        <p>{pharmacy.distance}</p>
                      </div>

                      <span
                        className={
                          pharmacy.stock === "Low stock" ? "stock low" : "stock"
                        }
                      >
                        {pharmacy.stock}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section className="features" id="pharmacy">
          <FeatureCard
            number="01"
            title="Pharmacies update by hand"
            text="Every count you see was typed in by a pharmacist at the counter, not guessed."
          />

          <FeatureCard
            number="02"
            title="Sorted by what's certain"
            text="Confirmed stock first, then low stock, then the ones worth skipping."
          />

          <FeatureCard
            number="03"
            title="Made to feel calm"
            text="No pop-ups, no upsell. Just an answer and directions to the door."
          />
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer id="about">
        <p>MedNear · availability confirmed by neighbourhood pharmacies</p>

        <p>
          Always follow your prescription. Call the pharmacy to reserve before
          travelling.
        </p>
      </footer>
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ number, title, text }) {
  return (
    <div className="feature-card">
      <span className="number">{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

export default App;
