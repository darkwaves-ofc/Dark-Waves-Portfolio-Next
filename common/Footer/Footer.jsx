import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../utils/fontAwesomeSetup.js";

export default function Footer() {
  return (
    <footer className="footer w-full m-t-8">
      <div className="container">
        <div className="flex-col-center w-full">
          <div className="footer-col flex-col-bet">
            <div className="social-links flex-row-bet w-full g-4">
              <a href="#">
                <FontAwesomeIcon size="sm" icon="fab fa-facebook-f" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fab fa-twitter" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fab fa-instagram" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="w-40 footer-col m-t-4">
            <ul className="flex-row-bet">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">Hire Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
