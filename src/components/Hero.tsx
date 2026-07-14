"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const words = ["Growth.", "Efficiency.", "Excellence.", "Success."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Growth.");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !gridRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gridRef.current.style.setProperty('--mouse-x', `${x}px`);
      gridRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];
    
    const typingSpeed = 100; 
    const deletingSpeed = 60; 
    const pauseBeforeDelete = 2000; 
    const pauseBeforeType = 400; 

    const handleType = () => {
      if (!isDeleting) {
        if (currentText === fullWord) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseBeforeDelete);
          return;
        }

        const nextText = fullWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);
        timer = setTimeout(handleType, typingSpeed);
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }

        const nextText = fullWord.slice(0, currentText.length - 1);
        setCurrentText(nextText);
        timer = setTimeout(handleType, deletingSpeed);
      }
    };

    let currentDelay = isDeleting ? deletingSpeed : typingSpeed;
    if (currentText === "" && !isDeleting) {
      currentDelay = pauseBeforeType;
    }

    timer = setTimeout(handleType, currentDelay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Interactive Spotlight Grid Background */}
      <div ref={gridRef} className={styles.spotlightGrid}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className="title" style={{ display: 'flex', flexDirection: 'column' }}>
            <span className={styles.maskLine}>
              <span className={styles.maskText} style={{ animationDelay: '0s' }}>
                Optimizing Operations.
              </span>
            </span>
            <span className={styles.maskLine}>
              <span className={styles.maskText} style={{ animationDelay: '0.15s' }}>
                Driving Business
              </span>
            </span>
            <span className={styles.maskLine}>
              <span 
                className={styles.maskText} 
                style={{ 
                  animationDelay: '0.3s', 
                  color: 'var(--accent)', 
                  background: 'none', 
                  WebkitTextFillColor: 'var(--accent)',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                {currentText}
                <span className={styles.cursor}>|</span>
              </span>
            </span>
          </h1>
          <p className={`${styles.animateDescription} subtitle`}>
            Hi, I&apos;m Fuzail Ahmad. An Operations Specialist and Consultant dedicated to making business workflows smoother and solving real-time challenges with practical solutions.
          </p>
          <div className={styles.animateCTA}>
            <div className={styles.ctaGroup}>
              <Link href="#portfolio" className={`btn ${styles.btnSolid}`}>
                View My Work
              </Link>
              <Link href="#contact" className={`btn btn-outline ${styles.btnOutline}`}>
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundGlow}></div>
    </section>
  );
}
