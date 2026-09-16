import Link from "next/link";

export const metadata = {
  title: "EquiKai Product | Connected Horse Health Monitoring",
  description:
    "Explore the EquiKai wearable for horse health, movement, and location monitoring.",
};

export default function ProductPage() {
  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">The EquiKai device</p>
            <h1>Built for the horse. Designed for everyday care.</h1>
            <p>
              A connected wearable bringing health, movement, and location
              information together in one system.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container product-page-stage">
            <div className="product-page-image">
              <div className="product-placeholder">
                <div className="placeholder-content">
                  <span>PRODUCT IMAGE</span>
                  <strong>EquiKai Device</strong>
                  <small>
                    Replace this placeholder with the final device render or
                    product photograph (e.g. equikai-device-studio.jpg).
                  </small>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow brown">One device</p>

              <h2>A connected view of your horse.</h2>

              <p className="lead">
                EquiKai is designed to fit naturally into everyday horse care
                while collecting the information needed to understand health,
                movement, and location over time.
              </p>

              <Link href="/app" className="text-link">
                Explore the app <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>What the device monitors.</h2>
              <p className="lead">
                EquiKai brings multiple signals together rather than treating
                each observation in isolation.
              </p>
            </div>

            <div className="product-spec-grid">
              <article>
                <span>01</span>
                <h3>Heart rate</h3>
                <p>
                  Monitor heart-rate information as part of a broader picture
                  of activity and wellbeing.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Oxygen</h3>
                <p>
                  Optical sensing contributes additional physiological context
                  to the monitoring system.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Temperature</h3>
                <p>
                  Track temperature trends alongside other signals.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Movement</h3>
                <p>
                  Motion data helps provide context around activity and
                  training.
                </p>
              </article>

              <article>
                <span>05</span>
                <h3>Location</h3>
                <p>
                  GPS provides location information for connected monitoring.
                </p>
              </article>

              <article>
                <span>06</span>
                <h3>Connectivity</h3>
                <p>
                  Designed around Wi-Fi, Bluetooth, and cellular connectivity
                  for connected use cases.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <p className="eyebrow">EquiKai</p>
            <h2>Better information. Better care.</h2>
            <Link href="/#pilot" className="button button-light">
              Join the pilot
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}