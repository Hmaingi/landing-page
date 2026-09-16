"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const useCaseNames = {
  "horse-owners": "Horse Owners",
  trainers: "Trainers",
  veterinarians: "Veterinarians",
  breeders: "Breeders",
  insurance: "Insurance",
  regulators: "Regulators",
  "equestrian-connoisseurs": "Equestrian Connoisseurs",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();

  const selectedUseCase =
    useCaseNames[searchParams.get("useCase")] || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    useCase: selectedUseCase,
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("EquiKai inquiry:", formData);

    alert("Thank you. Your inquiry has been received.");
  }

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <p className="eyebrow">CONTACT EQUIKAI</p>

          <h1>Let's start a conversation.</h1>

          <p>
            Tell us a little about yourself and what you are interested in.
            We will get back to you.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">INQUIRE ABOUT EQUIKAI</p>

              <h2>Tell us what you need.</h2>

              <p>
                Whether you are a horse owner, trainer, veterinarian, breeder,
                insurer, regulator or equestrian professional, we would like
                to hear from you.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254..."
                />
              </label>

              <label>
                I am interested as a
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>

                  {Object.entries(useCaseNames).map(([slug, name]) => (
                    <option value={name} key={slug}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to know..."
                  rows={6}
                  required
                />
              </label>

              <button type="submit" className="button button-primary">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}