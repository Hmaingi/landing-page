import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/app">EquiKai App</Link>
          <Link href="/use-cases">Use Cases</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#pilot" className="button">
            Join the pilot
          </Link>
        </div>
      </nav>
    </header>
  );
}