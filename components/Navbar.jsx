import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="EquiKai home">
          <img
            src="/equikai-linkedin-logo-transparent.png"
            alt="EquiKai, harnessing technology in equine health"
          />
        </Link>

        <div className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/app">EquiKai App</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#pilot" className="button">
            Join the waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}