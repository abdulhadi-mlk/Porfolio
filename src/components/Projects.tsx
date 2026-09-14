import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'AI Customer Support Chatbot',
    desc: 'RAG-based customer support chatbot built for SafeX. Answers questions from a knowledge base with semantic search, vector retrieval, context-aware responses, and hallucination prevention.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Gemini', 'Streamlit'],
    color: '#6366f1',
    featured: true,
    emoji: '🤖',
    githubUrl: 'https://github.com/abdulhadi-mlk/AI-Customer-Support-Chatbot-RAG-based-',
    demoUrl: 'https://safexcustomerchatbot.streamlit.app/',
  },
  {
    title: 'AI Recruitment Screening Assistant',
    desc: 'AI-assisted recruitment screening system that parses resumes, extracts skills, compares candidates against job requirements, and ranks results.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Skill Extraction'],
    color: '#3b82f6',
    featured: false,
    emoji: '📋',
    githubUrl: 'https://github.com/abdulhadi-mlk/AI_Recruitment_Screening_Assistant',
    demoUrl: 'https://airecruitmentscreeningassistant-w2.streamlit.app/',
  },
  {
    title: 'House Price Prediction',
    desc: 'ML application predicting house prices using regression models with feature engineering, cross-validation, and a Streamlit dashboard.',
    tags: ['Scikit-learn', 'Python', 'Streamlit', 'Pandas'],
    color: '#8b5cf6',
    featured: false,
    emoji: '🏠',
    githubUrl: 'https://github.com/abdulhadi-mlk/House_price_prediction',
    demoUrl: 'https://house-priceprediction-model.streamlit.app/',
  },
  {
    title: 'Document Chat AI',
    desc: 'AI application that lets users upload documents and ask questions about their content using PDF processing, RAG, and vector retrieval.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Streamlit', 'RAG'],
    color: '#06b6d4',
    featured: false,
    emoji: '📄',
    githubUrl: 'https://github.com/abdulhadi-mlk/Document_Chat_Assistant',
    demoUrl: 'https://documentchatassistant-ai.streamlit.app/',
  },
  {
    title: 'Text-to-Speech Converter',
    desc: "Streamlit application that converts text into speech using Google's Gemini TTS capabilities with audio processing and WAV/PCM output.",
    tags: ['Python', 'Google Gemini', 'Streamlit', 'WAV/PCM'],
    color: '#10b981',
    featured: false,
    emoji: '🔊',
    githubUrl: 'https://github.com/abdulhadi-mlk/Text_to_speech_converter',
    demoUrl: 'https://texttospeechconverter-ai.streamlit.app/',
  },
  {
  title: 'Project Task Management App',
  desc: 'A web-based task management application for creating, organizing, tracking, and managing project tasks efficiently.',
  tags: ['HTML','JavaScript', 'CSS', 'Task Management', 'Project Management'],
  color: '#10b981',
  featured: false,
  emoji: '📋',
  githubUrl: 'https://github.com/uzair-106/project-task-mangement-system',
  demoUrl: 'https://pm-uz.vercel.app/',
  },
  {
  title: 'Dayos Agentic Copilot Frontend Clone',
  desc: 'A frontend clone of the Dayos website developed during my internship, focusing on recreating its layout, design, responsive interface, and user experience.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  color: '#10b981',
  featured: false,
  emoji: '🌐',
  githubUrl: 'https://github.com/abdulhadi-mlk/Agentic_Copilot',
  demoUrl: 'https://intership-pro1.vercel.app/',
  }


];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
          els?.forEach((el, i) => setTimeout(() => el.classList.add('in-view'), i * 80));
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: '120px max(24px, calc((100vw - 1200px) / 2))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orb */}
      <div
        style={{
          position: 'absolute',
          right: '-10%',
          bottom: '10%',
          width: 500,
          height: 500,
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
          03 / Projects
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
          margin: '0 0 56px',
          lineHeight: 1.15,
        }}
      >
        Featured{' '}
        <span className="gradient-text">Work</span>
      </h2>

      {/* Featured project */}
      <div className="reveal" style={{ marginBottom: 24 }}>
        <FeaturedCard project={featured} />
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}
      >
        {rest.map((p, i) => (
          <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        background: '#0c1018',
        border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.07)'}`,
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${project.color}15` : 'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 320,
      }}
      className="featured-card"
    >
      {/* Visual panel */}
      <div
        style={{
          background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          minHeight: 280,
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
        <div
          style={{
            fontSize: 80,
            filter: 'drop-shadow(0 0 40px ' + project.color + '60)',
            animation: 'float 4s ease-in-out infinite',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {project.emoji}
        </div>
        {/* Featured badge */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            padding: '4px 10px',
            borderRadius: 6,
            background: project.color + '22',
            border: `1px solid ${project.color}40`,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 10,
            color: project.color,
            letterSpacing: '0.08em',
          }}
        >
          FEATURED
        </div>
      </div>

      {/* Content panel */}
      <div
        style={{
          padding: '40px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 800,
              fontSize: 24,
              letterSpacing: '-0.02em',
              color: '#f1f5f9',
              margin: '0 0 14px',
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#64748b', margin: 0 }}>{project.desc}</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} color={project.color} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <ProjectBtn label="GitHub" icon="github" href={project.githubUrl} />
          <ProjectBtn label="Live Demo" icon="external" href={project.demoUrl} primary color={project.color} />
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        background: '#0c1018',
        border: `1px solid ${hovered ? project.color + '38' : 'rgba(255,255,255,0.07)'}`,
        overflow: 'hidden',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.35)` : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mini visual */}
      <div
        style={{
          height: 120,
          background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
        <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h3
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: '-0.01em',
            color: '#e2e8f0',
            margin: 0,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: '#64748b', margin: 0, flex: 1 }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} color={project.color} small />
          ))}
          {project.tags.length > 3 && (
            <Tag label={`+${project.tags.length - 3}`} color={project.color} small />
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          <ProjectBtn label="GitHub" icon="github" href={project.githubUrl} small />
          <ProjectBtn label="Demo" icon="external" href={project.demoUrl} primary color={project.color} small />
        </div>
      </div>
    </div>
  );
}

function Tag({
  label,
  color,
  small,
}: {
  label: string;
  color: string;
  small?: boolean;
}) {
  return (
    <span
      style={{
        padding: small ? '3px 8px' : '4px 10px',
        borderRadius: 6,
        background: color + '12',
        border: `1px solid ${color}25`,
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: small ? 10 : 11,
        color: color + 'cc',
        letterSpacing: '0.03em',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

function ProjectBtn({
  label,
  icon,
  href,
  primary,
  color,
  small,
}: {
  label: string;
  icon: 'github' | 'external';
  href: string;
  primary?: boolean;
  color?: string;
  small?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const pad = small ? '7px 14px' : '9px 18px';
  const fs = small ? 12 : 13;

  return (
    <a
      href={href || undefined}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      aria-disabled={!href}
      title={href ? undefined : `Add a ${label} URL in Projects.tsx`}
      onClick={(event) => {
        if (!href) event.preventDefault();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: pad,
        borderRadius: 8,
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.1)',
        background: primary
          ? hovered
            ? color + 'dd'
            : color + 'cc'
          : hovered
            ? 'rgba(255,255,255,0.06)'
            : 'transparent',
        color: primary ? '#fff' : '#94a3b8',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 600,
        fontSize: fs,
        cursor: href ? 'pointer' : 'not-allowed',
        opacity: href ? 1 : 0.45,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      {icon === 'github' ? (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ) : (
        <svg
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
      {label}
    </a>
  );
}
