import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span className="eyebrow">404</span>

        <h1>Use case not found.</h1>

        <p>
          The page you are looking for does not exist or may have moved.
        </p>

        <Link href="/use-cases" className="button">
          View Use Cases
        </Link>
      </div>
    </section>
  );
}