"use client";
import Link from "next/link";
import { Button } from "../button/Button";
import Logo from "../logo/Logo";
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer background--black grid-container">
      <div className="container main-width">
        <div className="col">
          <div className="logoSection">
            <Logo />
          </div>

          <nav
            className="socialLinks"
            aria-label="Social media links"
          >
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Pinterest page"
                >
                  <FaPinterest />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className="pageLinks"
            aria-label="Footer navigation"
          >
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/stories">Stories</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col">
          <Button
            className="inviteButton"
            variant="secondary"
            aria-label="Get an invite"
            title="Get an invite"
          >
            Get an invite
          </Button>

          <div className="copyright">
            <p>Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
