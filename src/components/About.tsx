import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutContent}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>About Me</h2>
          <p className={styles.text}>
            I am Fuzail Ahmad, an Operations Specialist and Business Advisor. I have strong experience in managing fast-paced delivery operations, handling logistics, and solving real-time problems. I specialize in making daily workflows smoother and using smart solutions to fix operational issues.
          </p>
          <p className={styles.text}>
            Along with managing operations, I also work as a consultant to guide businesses and individuals. I help them improve their processes, solve daily challenges, and grow effectively. My goal is always to use practical ideas and data to bring the best results.
          </p>
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <h3>10k+</h3>
              <p>Operations Managed</p>
            </div>
            <div className={styles.statBox}>
              <h3>99.9%</h3>
              <p>Order Fulfillment</p>
            </div>
            <div className={styles.statBox}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="/fuzail.png"
            alt="Fuzail Ahmad"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}

