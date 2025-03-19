"use client";
import { useState, useEffect } from "react";
import { Button } from "../button/Button";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import Logo from "../logo/Logo";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // When menu is !open, make main content inert
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.inert = !isOpen;
    }
  };

  return (
    <nav
      className={`${styles.nav} main-width`}
      key="main-navigation"
    >
      <div className={`${styles.navContainer}`}>
        <Link
          href="/"
          className={styles.logoLink}
        >
          <Logo />
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className={styles.hamburger + (isOpen ? ` ${styles.open}` : "")}
        >
          <span></span>
          <span></span>
        </button>
        <div
          className={styles.menuContainer + (isOpen ? ` ${styles.open}` : "")}
          inert={isMobile ? !isOpen : undefined}
        >
          <ul className={styles.menu}>
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
          <Button
            variant="primary"
            aria-label="Get an invite"
            className={styles.inviteButton}
          >
            Get an Invite
          </Button>
        </div>
      </div>
    </nav>
  );
}
