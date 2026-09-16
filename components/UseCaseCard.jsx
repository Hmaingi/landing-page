"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function UseCaseCard({ item, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("is-visible");
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.14,
      }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`case-card ${
        index % 2 === 0 ? "case-card-odd" : "case-card-even"
      }`}
      style={{
        "--delay": `${index * 100}ms`,
      }}
    >
      <div
        className="case-card-image"
        style={{
          backgroundImage: `url("${item.image}")`,
        }}
        aria-hidden="true"
      />

      <div className="case-card-overlay" />

      <div className="case-card-content">
        <span className="case-card-number">
          {item.number}
        </span>

        <p className="case-card-label">
          {item.label}
        </p>

        <h2>{item.title}</h2>

        <p className="case-card-description">
          {item.shortDescription}
        </p>

        <Link
          href={`/use-cases/${item.slug}`}
          className="case-card-link"
        >
          Learn more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}