"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "../button/Button";
import Link from "next/link";
import Logo from "../logo/Logo";
import "./Navigation.scss";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

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
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.inert = !isOpen;
      if (!isOpen) {
        // Focus first menu item when opening
        setTimeout(() => {
          const firstLink = menuRef.current?.querySelector("a");
          firstLink?.focus();
        }, 100);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className="nav grid-container"
      aria-label="Main"
    >
      <div className="navContainer main-width">
        <Link
          href="/"
          className="logoLink"
          aria-label="Photosnap home"
        >
          <Logo />
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          className={`hamburger${isOpen ? " open" : ""}`}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <div
          id="main-menu"
          ref={menuRef}
          className={`menuContainer${isOpen ? " open" : ""}`}
          onKeyDown={handleKeyDown}
          inert={isMobile ? !isOpen : undefined}
        >
          <ul
            className="menu"
            role="list"
          >
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
            className="inviteButton"
          >
            Get an Invite
          </Button>
        </div>
      </div>
    </nav>
  );
}
