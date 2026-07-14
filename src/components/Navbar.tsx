"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Fuzail<span>.</span>
        </Link>
        
        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <Link href="#about" onClick={closeMenu}>About</Link>
          <Link href="#services" onClick={closeMenu}>Services</Link>
          <Link href="#portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }} onClick={closeMenu}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
