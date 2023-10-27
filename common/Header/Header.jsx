import Link from "next/link";
import "./Header.css"

export default function Header() {
  return (
    <header className="navbar p-2 flex-row-bet position-absolute w-95 m-auto">
      <Link href="/" className="navbar-logo text-dark font-lg font-weight-800">
        DarkWaves.Info
      </Link>
      <nav className="w-30 flex-row-aro font-weight-600">
        <Link href="/" className="navbar-link text-dark">
          Home
        </Link>
        <Link href="/about" className="navbar-link text-dark">
          About
        </Link>
        <Link href="/contact" className="navbar-link text-dark">
          Contact
        </Link>
        <Link href="/projects" className="navbar-link text-dark">
          Projects
        </Link>
      </nav>
    </header>
  );
}
