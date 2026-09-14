import { useEffect, useRef, useState } from 'react';

function useCounter(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setVal(Math.floor(current));
      if (current >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration, start]);
  return val;
}

const infoCards = [
  {
    icon: '🎓',
    title: 'Computer Science',
    desc: 'B.S. at University of Agriculture Faisalabad',
    color: '#6366f1',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Dev',
    desc: 'MERN stack, REST APIs & scalable back-ends',
    color: '#06b6d4',
  },
  {
    icon: '🤖',
    title: 'AI / Machine Learning',
    desc: 'LLMs, RAG systems, embeddings & ML pipelines',
    color: '#3b82f6',
  },
  {
    icon: '📊',
    title: 'Data Science',
    desc: 'Pandas, NumPy, Scikit-learn & data analysis',
    color: '#8b5cf6',
  },
];

const stats = [
  { value: 10, suffix: '+', label: 'Projects Built' },
  { value: 2, suffix: '+', label: 'Internships' },
  { value: 5, suffix: '+', label: 'AI/ML Models' },
  { value: 3, suffix: '+', label: 'Years Learning' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
          els?.forEach((el, i) => {
            setTimeout(() => el.classList.add('in-view'), i * 90);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const c0 = useCounter(stats[0].value, 1400, triggered);
  const c1 = useCounter(stats[1].value, 1000, triggered);
  const c2 = useCounter(stats[2].value, 1200, triggered);
  const c3 = useCounter(stats[3].value, 1600, triggered);
  const counters = [c0, c1, c2, c3];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '120px max(24px, calc((100vw - 1200px) / 2))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle orb */}
      <div
        style={{
          position: 'absolute',
          right: '-15%',
          top: '20%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Section label */}
      <div className="reveal" style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: '#6366f1',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          01 / About
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 60 }} />
      </div>

      {/* Heading */}
      <h2
        className="reveal"
        style={{
          fontSize: 'clamp(28px, 4vw, 46px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#f1f5f9',
          margin: '0 0 20px',
          lineHeight: 1.15,
          maxWidth: 600,
        }}
      >
        Turning Ideas Into{' '}
        <span className="gradient-text">Intelligent</span>{' '}
        Applications.
      </h2>

      {/* Body */}
      <p
        className="reveal"
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: '#64748b',
          maxWidth: 620,
          margin: '0 0 64px',
        }}
      >
        I started with the fundamentals of Computer Science and quickly found myself drawn to the
        intersection of AI and software engineering. From building RAG-powered chatbots and ML
        pipelines to shipping full-stack MERN applications, I focus on creating technology that
        actually solves real problems — not just tutorial demos.
      </p>

      {/* Info cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          marginBottom: 64,
        }}
      >
        {infoCards.map((card, i) => (
          <div
            key={card.title}
            className="reveal"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <InfoCard {...card} />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 1,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal"
            style={{
              transitionDelay: `${200 + i * 80}ms`,
              padding: '36px 28px',
              background: '#0c1018',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              position: 'relative',
            }}
          >
            <div
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 900,
                fontSize: 40,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #a5b4fc, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}
            >
              {counters[i]}
              {s.suffix}
            </div>
            <div
              style={{
                fontSize: 13,
                color: '#475569',
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '24px',
        borderRadius: 14,
        background: hovered ? '#101520' : '#0c1018',
        border: `1px solid ${hovered ? color + '44' : 'rgba(255,255,255,0.07)'}`,
        transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: color + '18',
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          marginBottom: 14,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 700,
          fontSize: 15,
          color: '#e2e8f0',
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}
