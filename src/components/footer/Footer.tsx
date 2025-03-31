"use client";
import Link from "next/link";
import { Button } from "../button/Button";
import Logo from "../logo/Logo";
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer background--black grid-container"
      role="contentinfo"
    >
      <div className="container main-width">
        <div className="col">
          <div className="logoSection">
            <Link
              href="/"
              aria-label="Photosnap home"
            >
              <Logo />
            </Link>
          </div>

          <nav
            className="socialLinks"
            aria-label="Social media links"
          >
            <h2 className="visually-hidden">Social Media Links</h2>
            <ul role="list">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page (opens in new window)"
                >
                  <FaFacebook
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel (opens in new window)"
                >
                  <FaYoutube
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page (opens in new window)"
                >
                  <FaTwitter
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Pinterest page (opens in new window)"
                >
                  <FaPinterest
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page (opens in new window)"
                >
                  <FaInstagram
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className="pageLinks"
            aria-label="Site pages"
          >
            <h2 className="visually-hidden">Site Navigation</h2>
            <ul role="list">
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
            aria-label="Get an invite to join Photosnap"
          >
            Get an invite
          </Button>

          <div className="copyright">
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
