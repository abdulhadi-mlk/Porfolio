import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    role: 'AI/ML Intern',
    org: 'Safex Solutions',
    period: 'Current',
    type: 'Internship',
    color: '#6366f1',
    desc: 'Currently working in the AI/ML domain across machine learning, data science, and generative AI. The work includes RAG applications, AI chatbots, LangChain workflows, and vector database integrations.',
    skills: ['Python', 'LangChain', 'RAG', 'ChromaDB', 'Scikit-learn', 'Pandas', 'ML Pipelines'],
    achievements: [
      'Working across machine learning, data science, and generative AI workflows',
      'Building RAG applications, AI chatbots, and knowledge-base retrieval systems',
      'Exploring LangChain, vector databases, and context-aware LLM applications',
    ],
  },
  {
    role: 'MERN Stack Intern',
    org: 'Edify College of IT',
    period: '3-month internship',
    type: 'Internship',
    color: '#3b82f6',
    desc: 'Completed a 3-month Web Developer / MERN Stack Developer internship at Edify College of IT, working across React, Node.js, Express, MongoDB, JavaScript, and full-stack web development.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'TypeScript'],
    achievements: [
      'Completed a 3-month Web Developer / MERN Stack Developer internship',
      'Worked with React, Node.js, Express, MongoDB, and JavaScript',
      'Contributed to full-stack web development workflows',
    ],
  },
];

const education = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'University of Agriculture Faisalabad',
  period: 'Computer Science Student',
  focus: 'AI/ML & Software Engineering',
  courses: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering', 'Computer Networks'],
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
          els?.forEach((el, i) => setTimeout(() => el.classList.add('in-view'), i * 100));
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: '120px max(24px, calc((100vw - 1200px) / 2))',
        position: 'relative',
      }}
    >
      {/* Orb */}
      <div
        id="education"
        style={{
          position: 'absolute',
          left: '-5%',
          bottom: '20%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
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
          04 / Experience
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
          margin: '0 0 64px',
          lineHeight: 1.15,
        }}
      >
        Work{' '}
        <span className="gradient-text">Experience</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}
        className="exp-grid"
      >
        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 23,
              top: 24,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, #6366f1, #3b82f6, transparent)',
              opacity: 0.3,
            }}
          />

          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.role} exp={exp} index={i} />
          ))}
        </div>

        {/* Education card */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <EducationCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        transitionDelay: `${index * 120}ms`,
        display: 'flex',
        gap: 24,
        marginBottom: 32,
        position: 'relative',
      }}
    >
      {/* Dot */}
      <div style={{ flexShrink: 0, paddingTop: 4 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: exp.color + '18',
            border: `1px solid ${exp.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: exp.color,
              boxShadow: `0 0 12px ${exp.color}80`,
            }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          borderRadius: 16,
          background: '#0c1018',
          border: `1px solid ${hovered ? exp.color + '35' : 'rgba(255,255,255,0.07)'}`,
          overflow: 'hidden',
          transition: 'border-color 0.25s',
        }}
      >
        {/* Header */}
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            width: '100%',
            padding: '24px 24px 20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  color: exp.color,
                  letterSpacing: '0.08em',
                  background: exp.color + '18',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                {exp.type.toUpperCase()}
              </span>
              <span style={{ fontSize: 12, color: '#475569' }}>{exp.period}</span>
            </div>
            <h3
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 800,
                fontSize: 18,
                color: '#f1f5f9',
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              {exp.role}
            </h3>
            <p style={{ fontSize: 13, color: '#64748b', margin: '4px 0 0' }}>{exp.org}</p>
          </div>
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
            viewBox="0 0 24 24"
            style={{
              flexShrink: 0,
              transition: 'transform 0.25s',
              transform: expanded ? 'rotate(180deg)' : 'none',
              marginTop: 6,
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div style={{ padding: '0 24px 24px' }}>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: '#64748b', margin: '0 0 16px' }}>
              {exp.desc}
            </p>
            {/* Achievements */}
            <div style={{ marginBottom: 16 }}>
              {exp.achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 10,
                    padding: '6px 0',
                    borderBottom: i < exp.achievements.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span style={{ color: exp.color, fontSize: 14, flexShrink: 0, marginTop: 1 }}>▸</span>
                  <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>{a}</span>
                </div>
              ))}
            </div>
            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {exp.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: '3px 10px',
                    borderRadius: 6,
                    background: exp.color + '12',
                    border: `1px solid ${exp.color}22`,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    color: exp.color + 'bb',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EducationCard() {
  return (
    <div
      style={{
        borderRadius: 16,
        background: '#0c1018',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '28px 24px',
        position: 'sticky',
        top: 84,
      }}
    >
      {/* Degree icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: 'rgba(139,92,246,0.12)',
          border: '1px solid rgba(139,92,246,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          marginBottom: 18,
        }}
      >
        🎓
      </div>

      <div
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          color: '#8b5cf6',
          letterSpacing: '0.1em',
          marginBottom: 8,
        }}
      >
        EDUCATION
      </div>

      <h3
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800,
          fontSize: 16,
          color: '#f1f5f9',
          margin: '0 0 6px',
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
        }}
      >
        {education.degree}
      </h3>

      <p style={{ fontSize: 13, color: '#64748b', margin: '0 0 4px' }}>{education.university}</p>
      <p
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: '#475569',
          margin: '0 0 20px',
        }}
      >
        {education.period}
      </p>

      <div
        style={{
          padding: '10px 14px',
          borderRadius: 8,
          background: 'rgba(139,92,246,0.08)',
          border: '1px solid rgba(139,92,246,0.18)',
          fontSize: 12,
          color: '#a78bfa',
          marginBottom: 18,
          fontWeight: 500,
        }}
      >
        Focus: {education.focus}
      </div>

      <div>
        <div
          style={{
            fontSize: 11,
            color: '#475569',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.08em',
            marginBottom: 10,
          }}
        >
          COURSEWORK
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {education.courses.map((c) => (
            <span
              key={c}
              style={{
                padding: '3px 9px',
                borderRadius: 5,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                fontSize: 11,
                color: '#64748b',
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
