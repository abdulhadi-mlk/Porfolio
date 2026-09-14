import { useEffect, useRef, useState } from 'react';

type Category = 'AI & ML' | 'Full-Stack' | 'Tools';

const skillGroups: Record<Category, { name: string; level: number; color: string }[]> = {
  'AI & ML': [
    { name: 'Python', level: 92, color: '#6366f1' },
    { name: 'Machine Learning', level: 85, color: '#6366f1' },
    { name: 'LangChain', level: 80, color: '#8b5cf6' },
    { name: 'RAG Systems', level: 82, color: '#8b5cf6' },
    { name: 'LLM Applications', level: 83, color: '#a78bfa' },
    { name: 'Scikit-learn', level: 78, color: '#6366f1' },
    { name: 'NumPy', level: 86, color: '#8b5cf6' },
    { name: 'Pandas', level: 88, color: '#6366f1' },
    { name: 'Embeddings', level: 79, color: '#a78bfa' },
    { name: 'Vector DBs', level: 76, color: '#8b5cf6' },
    { name: 'AI Engineering', level: 84, color: '#6366f1' },
  ],
  'Full-Stack': [
    { name: 'React', level: 90, color: '#3b82f6' },
    { name: 'TypeScript', level: 82, color: '#3b82f6' },
    { name: 'Next.js', level: 78, color: '#60a5fa' },
    { name: 'Node.js', level: 84, color: '#3b82f6' },
    { name: 'Express', level: 82, color: '#60a5fa' },
    { name: 'MongoDB', level: 85, color: '#3b82f6' },
    { name: 'REST APIs', level: 88, color: '#60a5fa' },
    { name: 'Tailwind CSS', level: 90, color: '#3b82f6' },
    { name: 'JavaScript', level: 91, color: '#60a5fa' },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 89, color: '#06b6d4' },
    { name: 'Streamlit', level: 84, color: '#06b6d4' },
    { name: 'Flask', level: 80, color: '#22d3ee' },
    { name: 'ChromaDB', level: 76, color: '#06b6d4' },
    { name: 'Firebase', level: 78, color: '#22d3ee' },
    { name: 'SQL', level: 75, color: '#06b6d4' },
    { name: 'Jupyter', level: 87, color: '#22d3ee' },
    { name: 'Docker', level: 65, color: '#06b6d4' },
  ],
};

const tabs: Category[] = ['AI & ML', 'Full-Stack', 'Tools'];

export default function Skills() {
  const [active, setActive] = useState<Category>('AI & ML');
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
          els?.forEach((el, i) => setTimeout(() => el.classList.add('in-view'), i * 70));
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = skillGroups[active];

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: '120px max(24px, calc((100vw - 1200px) / 2))',
        position: 'relative',
      }}
    >
      {/* Orb */}
      <div
        style={{
          position: 'absolute',
          left: '-10%',
          top: '30%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
          02 / Skills
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)', maxWidth: 60 }} />
      </div>

      <h2
        className="reveal"
        style={{
          fontSize: 'clamp(28px, 4vw, 46px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#f1f5f9',
          margin: '0 0 48px',
          lineHeight: 1.15,
        }}
      >
        Technical{' '}
        <span className="gradient-text">Expertise</span>
      </h2>

      {/* Tab bar */}
      <div
        className="reveal"
        style={{
          display: 'flex',
          gap: 4,
          marginBottom: 48,
          padding: '4px',
          background: '#0c1018',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 12,
          width: 'fit-content',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: '9px 22px',
              borderRadius: 9,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              transition: 'all 0.22s ease',
              background: active === tab ? 'linear-gradient(135deg, #6366f1, #3b82f6)' : 'transparent',
              color: active === tab ? '#fff' : '#64748b',
              boxShadow: active === tab ? '0 2px 16px rgba(99,102,241,0.3)' : 'none',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 12,
        }}
      >
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} animate={inView} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
  animate,
}: {
  skill: { name: string; level: number; color: string };
  index: number;
  animate: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => setBarWidth(skill.level), 100 + index * 50);
    return () => clearTimeout(timeout);
  }, [animate, skill.level, index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '16px 20px',
        borderRadius: 12,
        background: hovered ? '#101520' : '#0c1018',
        border: `1px solid ${hovered ? skill.color + '35' : 'rgba(255,255,255,0.06)'}`,
        transition: 'background 0.2s, border-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            fontSize: 13.5,
            color: '#e2e8f0',
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: skill.color,
            fontWeight: 500,
          }}
        >
          {skill.level}%
        </span>
      </div>
      {/* Progress track */}
      <div
        style={{
          height: 4,
          borderRadius: 4,
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: 4,
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </div>
  );
}
