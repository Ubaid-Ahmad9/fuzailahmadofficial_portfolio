import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <h3>Fuzail Ahmad</h3>
            <p>Operations Specialist & Advisor</p>
          </div>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/fuzailahmadofficial" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/FuzailAhmadOffi" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="mailto:officialfuzailahmad@gmail.com">Email</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Fuzail Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
