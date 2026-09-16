import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="container hero-content">
          <h1>
            Real-time insight
            <br />
            for better horse care.
          </h1>

          <p className="hero-copy">
            EquiKai helps owners, trainers, and veterinarians monitor
            horse health, movement, and location through a lightweight
            wearable designed for everyday riding and stable care.
          </p>

          <div className="hero-actions">
            <Link href="#pilot" className="button button-primary">
              Join the pilot
            </Link>

            <Link href="/product" className="button button-light">
              Explore EquiKai
            </Link>
          </div>

          <div className="hero-status">
            <span className="status-dot" />
            <span>Designed for continuous monitoring</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="section story-section">
        <div className="container narrow-container">
          <p className="eyebrow">BECAUSE EVERY HORSE MATTERS</p>

          <h2>Better care starts with knowing what is happening.</h2>

          <p className="large-copy">
            Horses cannot tell us when something feels wrong. EquiKai is
            designed to give the people responsible for them better insight
            into changes in health, movement, and location — helping them
            make more informed decisions earlier.
          </p>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="section product-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE EQUIKAI DEVICE</p>

              <h2>
                A wearable built
                <br />
                around the horse.
              </h2>
            </div>

            <p>
              A compact monitoring device designed to sit securely under the
              girth strap while collecting information throughout everyday
              riding and stable activities.
            </p>
          </div>

          <div className="product-showcase">
            <div className="product-visual">
              <div className="product-placeholder">
                <div className="placeholder-content">
                  <span>PRODUCT IMAGE</span>
                  <strong>EquiKai Device</strong>
                  <small>
                    Replace this placeholder with the final device render or
                    product photograph.
                  </small>
                </div>
              </div>

              <p className="eyebrow product-visual-caption">
                NON-INVASIVE HORSE HEALTH MONITORING
              </p>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <span className="feature-number">01</span>

                <div>
                  <h3>Health</h3>
                  <p>
                    Monitor key physiological signals including heart rate,
                    oxygen saturation and temperature.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-number">02</span>

                <div>
                  <h3>Movement</h3>
                  <p>
                    Capture movement patterns and activity to help understand
                    how a horse is behaving and performing.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-number">03</span>

                <div>
                  <h3>Location</h3>
                  <p>
                    Track the horse's location using integrated positioning
                    capabilities.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-number">04</span>

                <div>
                  <h3>Connectivity</h3>
                  <p>
                    Designed to work across Wi-Fi, Bluetooth and cellular
                    connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section process-section">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">HOW IT WORKS</p>

            <h2>From monitoring to action.</h2>

            <p>
              EquiKai turns information collected from the horse into insight
              that can support better day-to-day care.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>01</span>
              <h3>Monitor</h3>
              <p>
                The device continuously collects relevant health and movement
                information.
              </p>
            </article>

            <article className="process-card">
              <span>02</span>
              <h3>Understand</h3>
              <p>
                Data is organised so owners, trainers and professionals can
                understand what is happening.
              </p>
            </article>

            <article className="process-card">
              <span>03</span>
              <h3>Alert</h3>
              <p>
                Important changes can be surfaced so they are easier to notice
                and investigate.
              </p>
            </article>

            <article className="process-card">
              <span>04</span>
              <h3>Act</h3>
              <p>
                Better information helps the people caring for the horse
                decide what to do next.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* APP */}
      <section className="section app-section">
        <div className="container">
          <div className="app-layout">
            <div className="app-copy">
              <p className="eyebrow">THE EQUIKAI APP</p>

              <h2>
                Your horse's
                <br />
                information in one place.
              </h2>

              <p>
                EquiKai brings health, movement and location information
                together so the people responsible for a horse can see what
                matters without relying only on manual observation.
              </p>

              <Link href="/app" className="text-link">
                Explore the EquiKai App →
              </Link>
            </div>

            <div className="dashboard-frame">
              <div className="dashboard-placeholder">
                <div className="placeholder-content">
                  <span>APP DASHBOARD</span>

                  <strong>EquiKai App Dashboard</strong>

                  <small>
                    Replace this placeholder with the live app dashboard
                    screenshot (Horse Health Monitoring Dashboard.png).
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES — ONE CARD ONLY */}
      <section className="section use-case-preview">
        <div className="container">
          <div className="use-case-card merged-image-card">
            <div className="use-case-card-background">
              <div className="placeholder-fill">
                <span>IMAGE PLACEHOLDER</span>
                <strong>Use Cases Image</strong>
                <small>Replace with a dedicated use-cases hero image.</small>
              </div>
              <div className="background-overlay" />
            </div>

            <div className="use-case-card-content">
              <p className="eyebrow">USE CASES</p>

              <h2>Built for everyone who cares for horses.</h2>

              <p>
                From owners and trainers to veterinarians, breeders,
                insurers and regulators, EquiKai is designed to support
                different parts of the equestrian ecosystem.
              </p>

              <Link href="/use-cases" className="button button-primary">
                Explore Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <section className="section pilot-section" id="pilot">
        <div className="container">
          <div className="pilot-card">
            <div>
              <p className="eyebrow">EARLY ACCESS</p>

              <h2>Be part of the EquiKai pilot.</h2>

              <p>
                We are working with early users to test EquiKai in real
                equestrian environments and improve the product around the
                people and horses who will use it.
              </p>
            </div>

            <div className="pilot-actions">
              <Link href="/contact" className="button button-primary">
                Email us
              </Link>

              <a
                href="https://wa.me/254700000000"
                className="button button-outline"
                target="_blank"
                rel="noreferrer noopener"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <p className="eyebrow">EQUIKAI</p>

          <h2>Because every horse matters.</h2>

          <Link href="/product" className="button button-light">
            Discover EquiKai
          </Link>
        </div>
      </section>
    </main>
  );
}