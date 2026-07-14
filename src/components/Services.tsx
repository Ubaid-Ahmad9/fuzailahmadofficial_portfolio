import styles from './Services.module.css';

const services = [
  {
    title: 'Operations Management',
    description: 'Managing fast-paced daily logistics, optimizing real-time workflows, and handling vendor coordination.',
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: 'Process Optimization',
    description: 'Finding inefficiencies in workflows, reducing operational friction, and boosting everyday productivity.',
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  {
    title: 'Business Advisory',
    description: 'Providing practical guidance to individuals and businesses to solve challenges and scale smoothly.',
    icon: (
      <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.2 7.8 10.2 9.8 7.8 16.2 13.8 14.2 16.2 7.8" />
      </svg>
    )
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} glass`}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
