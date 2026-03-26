import styles from "./page.module.css";

export default function Home() {
  const stack = [
    { label: "Framework", value: "Next.js 14" },
    { label: "Lenguaje", value: "TypeScript" },
    { label: "Estilos", value: "CSS Modules" },
    { label: "Deploy", value: "Vercel" },
  ];

  const features = [
    {
      num: "01",
      title: "App Router",
      desc: "Arquitectura moderna con layouts anidados, loading states y error boundaries.",
    },
    {
      num: "02",
      title: "TypeScript",
      desc: "Tipado estático para un código más robusto y autocompletado en tu editor.",
    },
    {
      num: "03",
      title: "CSS Modules",
      desc: "Estilos con scope local sin configuración extra. Cero conflictos.",
    },
    {
      num: "04",
      title: "Listo para Vercel",
      desc: "Despliega en segundos. Solo conecta tu repo y Vercel hace el resto.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.logo}>◆ starter</span>
        <div className={styles.navLinks}>
          <a href="#stack" className={styles.navLink}>stack</a>
          <a href="#features" className={styles.navLink}>features</a>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
          >
            deploy →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>NEXT.JS STARTER — 2024</div>
        <h1 className={styles.heroTitle}>
          Construye.<br />
          <span className={styles.heroAccent}>Despliega.</span><br />
          Itera.
        </h1>
        <p className={styles.heroSub}>
          Una base limpia y funcional para tu próximo proyecto.<br />
          Sin dependencias innecesarias. Sin opiniones forzadas.
        </p>
        <div className={styles.heroCtas}>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            ↗ Deploy en Vercel
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Ver docs
          </a>
        </div>
        <div className={styles.heroDivider} />
      </section>

      {/* Stack */}
      <section id="stack" className={styles.section}>
        <div className={styles.sectionLabel}>// stack</div>
        <div className={styles.stackGrid}>
          {stack.map((item) => (
            <div key={item.label} className={styles.stackItem}>
              <span className={styles.stackLabel}>{item.label}</span>
              <span className={styles.stackValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.section}>
        <div className={styles.sectionLabel}>// features</div>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.num} className={styles.featureCard}>
              <span className={styles.featureNum}>{f.num}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className={styles.ctaText}>¿Listo para empezar?</p>
        <h2 className={styles.ctaHeading}>Tu próximo proyecto<br />comienza aquí.</h2>
        <a
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          ↗ Deploy gratis en Vercel
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>Next.js Starter — Listo para producción</span>
        <span className={styles.footerRight}>
          Hecho con{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
        </span>
      </footer>
    </main>
  );
}
