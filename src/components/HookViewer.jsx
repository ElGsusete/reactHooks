import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Play, Code, BookOpen } from 'lucide-react';
import GuideRenderer from './GuideRenderer';
import { hooksRegistry } from '../hooks-data';
import CodeBlock from './CodeBlock';

const HookViewer = () => {
  const { hookId } = useParams();
  const [activeTab, setActiveTab] = useState('preview');
  const hookData = hooksRegistry[hookId] || {
    name: hookId,
    description: 'Este hook aún no tiene documentación detallada.',
    docs: 'https://react.dev/reference/react'
  };

  // Reset tab when hook changes
  useEffect(() => {
    setActiveTab('preview');
  }, [hookId]);

  return (
    <div className="hook-viewer">
      <header className="viewer-header">
        <div className="header-info">
          <h1>{hookData.name}</h1>
          <p>{hookData.description}</p>
        </div>
        <a 
          href={hookData.docs} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="docs-link"
        >
          <span>Documentación oficial</span>
          <ExternalLink size={14} />
        </a>
      </header>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            <Play size={16} />
            <span>Preview</span>
          </button>
          <button 
            className={`tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <Code size={16} />
            <span>Code</span>
          </button>
          <button 
            className={`tab ${activeTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            <BookOpen size={16} />
            <span>Guía</span>
          </button>
        </div>
      </div>

      <div className="content-area">
        {activeTab === 'preview' && (
          <div className="preview-pane card">
            <div className="pane-header">Interactive Playground</div>
            <div className="pane-content">
              {hookData.demo ? (() => {
                const DemoComponent = hookData.demo;
                return <DemoComponent />;
              })() : (
                <div className="placeholder-demo">
                  <p>Demo interactiva de <strong>{hookId}</strong></p>
                  <p className="subtext">Próximamente: Implementación detallada de este playground.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="code-pane">
            <CodeBlock code={hookData.code || `// Código para ${hookId} no disponible`} />
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="docs-pane">
            <GuideRenderer content={hookData.guide} hookName={hookId} />
          </div>
        )}
      </div>

      <style jsx="true">{`
        .hook-viewer {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .viewer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          gap: 20px;
        }

        .header-info h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .header-info p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
        }

        .docs-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .docs-link:hover {
          background-color: var(--accent-glow);
          color: var(--accent-primary);
        }

        .tabs-container {
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .tabs {
          display: flex;
          gap: 32px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 4px;
          color: var(--text-tertiary);
          font-size: 0.95rem;
          font-weight: 600;
          position: relative;
          transition: color var(--transition-fast);
        }

        .tab:hover {
          color: var(--text-secondary);
        }

        .tab.active {
          color: var(--accent-primary);
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--accent-primary);
        }

        .card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--card-shadow);
        }

        .pane-header {
          padding: 16px 24px;
          background-color: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }

        .pane-content {
          padding: 32px;
        }

        .placeholder-demo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          text-align: center;
          color: var(--text-secondary);
        }

        .subtext {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          margin-top: 8px;
        }

        .markdown-body {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .markdown-body code {
          background-color: var(--bg-tertiary);
          color: var(--accent-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.9em;
        }

        .markdown-body h3 {
          color: var(--text-primary);
          margin: 24px 0 12px;
        }
      `}</style>
    </div>
  );
};

export default HookViewer;
