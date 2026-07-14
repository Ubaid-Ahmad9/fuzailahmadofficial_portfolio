import styles from './Portfolio.module.css';

const projects = [
  {
    title: 'Workflow Management',
    category: 'Operations',
    description: 'Handled fast-paced daily operations and coordinated teams to ensure high performance and zero delays.',
    metrics: 'Zero Delays',
  },
  {
    title: 'Vendor Operations Management',
    category: 'Logistics',
    description: 'Managed real-time coordination between partner merchants and delivery networks to reduce cancellation rates.',
    metrics: '-40% Cancellations',
  },
  {
    title: 'Cross-Functional Advisory',
    category: 'Consulting',
    description: 'Guided small scale businesses on process improvement, tracking metrics, and scaling strategies.',
    metrics: 'Scale Smoothly',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Case Studies & Work</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.card} glass`}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.metrics}>{project.metrics}</span>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
