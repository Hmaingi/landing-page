import Link from "next/link";

export const metadata = {
  title: "EquiKai App | Horse Health Monitoring",
};

export default function AppPage() {
  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">The EquiKai App</p>
            <h1>Your horse's health. At a glance.</h1>
            <p>
              Turn connected sensor data into a clearer picture of health,
              movement, location, and change.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container app-layout app-page-layout">
            <div className="app-copy app-page-copy">
              <p className="eyebrow brown">Your dashboard</p>

              <h2>Everything in one place.</h2>

              <p className="lead">
                EquiKai is designed to make the information collected by the
                device easier to understand and act on.
              </p>

              <div className="app-list">
                <div className="app-list-item">
                  <span>01</span>
                  <div>
                    <h3>Health</h3>
                    <p>
                      Review the health information being collected from your
                      horse.
                    </p>
                  </div>
                </div>

                <div className="app-list-item">
                  <span>02</span>
                  <div>
                    <h3>Activity</h3>
                    <p>
                      Understand movement and activity patterns over time.
                    </p>
                  </div>
                </div>

                <div className="app-list-item">
                  <span>03</span>
                  <div>
                    <h3>Location</h3>
                    <p>
                      Maintain visibility of connected horses and their
                      location.
                    </p>
                  </div>
                </div>

                <div className="app-list-item">
                  <span>04</span>
                  <div>
                    <h3>Alerts</h3>
                    <p>
                      Surface signals that may need attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-frame">
              <div className="dashboard-placeholder">
                <div className="placeholder-content">
                  <span>APP DASHBOARD</span>
                  <strong>EquiKai App Dashboard</strong>
                  <small>
                    Replace this placeholder with the final app dashboard
                    screenshot.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>Built around the people using the data.</h2>
              <p className="lead">
                Owners, trainers, veterinary teams, and other equestrian
                professionals need different information from the same horse.
              </p>
            </div>
            <div className="process-grid">
              <article className="process-card">
                <span>01</span>
                <h3>See</h3>
                <p>
                  Bring important information into a single view.
                </p>
              </article>

              <article className="process-card">
                <span>02</span>
                <h3>Compare</h3>
                <p>
                  Understand change against the horse's previous patterns.
                </p>
              </article>

              <article className="process-card">
                <span>03</span>
                <h3>Understand</h3>
                <p>
                  Connect health information with activity and context.
                </p>
              </article>

              <article className="process-card">
                <span>04</span>
                <h3>Act</h3>
                <p>
                  Use better information to guide the next decision.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <p className="eyebrow">EquiKai App</p>
            <h2>Connected care starts with better information.</h2>

            <Link href="/#pilot" className="button button-light">
              Join the pilot
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}