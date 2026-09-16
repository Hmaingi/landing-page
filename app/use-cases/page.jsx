import Link from "next/link";
import { useCases } from "../../data/useCases";

export default function UseCasesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">USE CASES</p>

          <h1>One platform. Different needs.</h1>

          <p>
            EquiKai is designed to support the different people involved in
            caring for, training, managing and protecting horses.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="section use-cases-grid-section">
        <div className="container">
          <div className="use-cases-grid">
            {useCases.map((uc) => (
              <Link
                href={`/use-cases/${uc.slug}`}
                key={uc.slug}
                className="use-case-detail-card clickable"
              >
                <div className="use-case-card-image">
                  <div className="placeholder-small">
                    <span>IMAGE PLACEHOLDER</span>
                    <strong>{uc.label}</strong>
                    <small>Replace with final image for this use case.</small>
                  </div>
                </div>

                <div className="use-case-card-body">
                  <span className="use-case-number">{uc.number}</span>

                  <div>
                    <h2>{uc.label.replace(/^For\s+/i, "")}</h2>

                    <p>{uc.shortDescription}</p>

                    <div className="use-case-cta">
                      <span>Explore this use case →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="section use-case-image-section">
        <div className="container">
          <div className="use-case-image-banner">
            <img
              src="/assets/bo-zhang-7R9Zvl472VM-unsplash.jpg"
              alt="Horse in an equestrian setting"
            />

            <div className="image-banner-content">
              <p className="eyebrow">EQUIKAI</p>

              <h2>Because every horse matters.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container">
          <p className="eyebrow">GET INVOLVED</p>

          <h2>Help us build better tools for horse care.</h2>

          <Link href="/#pilot" className="button button-light">
            Join the Pilot
          </Link>
        </div>
      </section>
    </main>
  );
}