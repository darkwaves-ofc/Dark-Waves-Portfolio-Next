"use client"; // This line tells React this component is a Client Component
import Link from "next/link";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const Fade = dynamic(() => import("react-reveal/Fade"), {
  ssr: false, // Disable server-side rendering
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // New state to track if the component has mounted

  useEffect(() => {
    setHasMounted(true); // Set the hasMounted state to true once the component mounts
    setIsMenuOpen(false); // Close the menu initially when on the client
  }, []);

  // We will check for isMobile only after the component has mounted
  const isMobileQuery = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = hasMounted ? isMobileQuery : false;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!hasMounted) {
    return null; // You can return a loader or null here until the component has mounted
  }

  return (
    <header
      className={`navbar p-2 ${
        !isMobile ? "position-absolute w-95" : "position-relative"
      } `}
    >
      <div className="header-content position-relative flex-row-bet">
        <Link
          href="/"
          className="navbar-logo text-dark font-lg font-weight-800"
        >
          DarkWaves.Info
        </Link>
        {isMobile && (
          <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
            <Fade duration={300}>
              <FontAwesomeIcon
                icon={isMenuOpen ? "fas fa-times" : "fas fa-bars"}
              />
            </Fade>
          </div>
        )}
        {!isMobile && (
          <nav className="navbar-menu flex-row-aro font-weight-600">
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
        )}
      </div>
      {isMobile && (
        <div
          className={`nav-menu-mobile position-relative w-full m-t-4 ${
            isMenuOpen ? "active" : ""
          }`}
        >
          <nav className="w-100 flex-col-aro font-weight-600">
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
        </div>
      )}
    </header>
  );
}
