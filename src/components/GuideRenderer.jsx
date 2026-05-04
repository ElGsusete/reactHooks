import React, { useMemo } from 'react';
import { Lightbulb, Target, AlertTriangle, Zap, BookOpen, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Maps heading keywords to specific Lucide icons, color schemes, and gradients.
 */
const getHeadingMeta = (heading) => {
  const lower = heading.toLowerCase();
  if (lower.includes('qué es') || lower.includes('que es'))
    return { icon: BookOpen, gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#818cf8' };
  if (lower.includes('cuándo') || lower.includes('cuando'))
    return { icon: Target, gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: '#38bdf8' };
  if (lower.includes('regla') || lower.includes('reglas'))
    return { icon: AlertTriangle, gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#fbbf24' };
  if (lower.includes('rendimiento') || lower.includes('performance') || lower.includes('optimiz'))
    return { icon: Zap, gradient: 'linear-gradient(135deg, #10b981, #06b6d4)', color: '#34d399' };
  if (lower.includes('diferencia') || lower.includes('vs'))
    return { icon: ArrowRight, gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)', color: '#f472b6' };
  if (lower.includes('ventaja'))
    return { icon: CheckCircle, gradient: 'linear-gradient(135deg, #10b981, #22d3ee)', color: '#34d399' };
  if (lower.includes('concepto') || lower.includes('cómo') || lower.includes('como'))
    return { icon: Lightbulb, gradient: 'linear-gradient(135deg, #f59e0b, #f97316)', color: '#fbbf24' };
  if (lower.includes('advertencia') || lower.includes('cuidado') || lower.includes('problema'))
    return { icon: AlertTriangle, gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)', color: '#f87171' };
  if (lower.includes('limpieza') || lower.includes('cleanup'))
    return { icon: Sparkles, gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)', color: '#a78bfa' };
  
  return { icon: BookOpen, gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#818cf8' };
};

/**
 * Simple parser for inline markdown (bold and code).
 */
const parseInline = (text) => {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }

    if (match[2]) {
      parts.push({ type: 'bold', content: match[2] });
    } else if (match[3]) {
      parts.push({ type: 'code', content: match[3] });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) });
  }

  return parts;
};

const InlineContent = ({ text }) => {
  const parts = parseInline(text);
  return (
    <>
      {parts.map((part, i) => {
        if (part.type === 'bold') return <strong key={i} className="guide-bold">{part.content}</strong>;
        if (part.type === 'code') return <code key={i} className="guide-inline-code">{part.content}</code>;
        return <span key={i}>{part.content}</span>;
      })}
    </>
  );
};

/**
 * Parses markdown-like text into structured sections.
 */
const parseGuide = (text) => {
  if (!text) return [];

  const lines = text.split('\n');
  const sections = [];
  let currentSection = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('### ')) {
      if (currentSection) sections.push(currentSection);
      currentSection = {
        heading: trimmed.slice(4),
        items: []
      };
    } else if (trimmed && currentSection) {
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
      if (numberedMatch) {
        currentSection.items.push({ type: 'numbered', number: numberedMatch[1], content: numberedMatch[2] });
      } else if (trimmed.startsWith('- ')) {
        currentSection.items.push({ type: 'bullet', content: trimmed.slice(2) });
      } else {
        currentSection.items.push({ type: 'paragraph', content: trimmed });
      }
    }
  }

  if (currentSection) sections.push(currentSection);
  return sections;
};

const GuideRenderer = ({ content, hookName }) => {
  const sections = useMemo(() => parseGuide(content), [content]);

  if (!content || sections.length === 0) {
    return (
      <div className="guide-empty">
        <BookOpen size={48} strokeWidth={1.5} />
        <p>Aquí irá una guía detallada sobre <strong>{hookName}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="guide-container">
      {sections.map((section, sectionIndex) => {
        const meta = getHeadingMeta(section.heading);
        const Icon = meta.icon;

        return (
          <section
            key={sectionIndex}
            className="guide-section"
            style={{ 
              '--section-color': meta.color, 
              '--section-gradient': meta.gradient, 
              animationDelay: `${sectionIndex * 80}ms` 
            }}
          >
            <div className="guide-section-header">
              <div className="guide-section-icon" style={{ background: meta.gradient }}>
                <Icon size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <h3 className="guide-section-title">
                <InlineContent text={section.heading} />
              </h3>
            </div>

            <div className="guide-section-content">
              {section.items.map((item, itemIndex) => {
                if (item.type === 'paragraph') {
                  return (
                    <p key={itemIndex} className="guide-paragraph">
                      <InlineContent text={item.content} />
                    </p>
                  );
                }

                if (item.type === 'bullet') {
                  return (
                    <div key={itemIndex} className="guide-list-item">
                      <span className="guide-bullet" style={{ backgroundColor: meta.color }} />
                      <p>
                        <InlineContent text={item.content} />
                      </p>
                    </div>
                  );
                }

                if (item.type === 'numbered') {
                  return (
                    <div key={itemIndex} className="guide-list-item guide-numbered">
                      <span className="guide-number" style={{ background: meta.gradient }}>
                        {item.number}
                      </span>
                      <p>
                        <InlineContent text={item.content} />
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </section>
        );
      })}

      <style jsx="true">{`
        .guide-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 8px 0;
        }

        .guide-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          animation: guideSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards;
          position: relative;
        }

        .guide-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--section-gradient);
          border-radius: 4px 0 0 4px;
          opacity: 0.8;
        }

        .guide-section:hover {
          border-color: color-mix(in srgb, var(--section-color) 40%, var(--border-color));
          box-shadow: 0 10px 30px -10px color-mix(in srgb, var(--section-color) 20%, transparent);
          transform: translateY(-2px);
        }

        @keyframes guideSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .guide-section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 24px 0 24px;
        }

        .guide-section-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px color-mix(in srgb, var(--section-color) 25%, transparent);
        }

        .guide-section-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .guide-section-content {
          padding: 16px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .guide-paragraph {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.8;
          margin: 0;
        }

        .guide-list-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }

        .guide-list-item p {
          margin: 0;
          flex: 1;
        }

        .guide-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 10px;
          opacity: 0.7;
        }

        .guide-numbered .guide-number {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
          margin-top: 2px;
          box-shadow: 0 2px 6px color-mix(in srgb, var(--section-color) 30%, transparent);
        }

        .guide-bold {
          color: var(--text-primary);
          font-weight: 600;
        }

        .guide-inline-code {
          background: color-mix(in srgb, var(--section-color) 10%, var(--bg-tertiary));
          color: var(--section-color);
          padding: 2px 8px;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.9em;
          font-weight: 600;
          border: 1px solid color-mix(in srgb, var(--section-color) 20%, transparent);
        }

        .guide-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 80px 24px;
          text-align: center;
          color: var(--text-tertiary);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--border-color);
        }

        .guide-empty p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default GuideRenderer;
