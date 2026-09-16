import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© 2026 EquiKai. All rights reserved.</p>

        <div className="footer-links">
          <Link href="/#features">Features</Link>
          <Link href="/use-cases">Use cases</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#apply">Contact</Link>
        </div>
      </div>
    </footer>
  );
}