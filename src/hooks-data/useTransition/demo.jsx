import React, { useState, useTransition } from 'react';
import { Layout, Loader2, List } from 'lucide-react';

const SlowList = ({ text }) => {
  // Simulamos un renderizado muy pesado
  const items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<div key={i} className="slow-item">Item {i} para "{text}"</div>);
  }
  return <div className="slow-list-container">{items}</div>;
};

const UseTransitionDemo = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('inicio');
  const [inputValue, setInputValue] = useState('');

  const handleTabChange = (newTab) => {
    // Marcamos el cambio de pestaña como una transición de baja prioridad
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Transiciones Concurrentes</h3>
        <p className="demo-desc">
          Mantiene la interfaz responsiva durante actualizaciones de estado pesadas.
        </p>

        <div className="transition-tabs">
          <button 
            onClick={() => handleTabChange('inicio')}
            className={`tab-btn ${tab === 'inicio' ? 'active' : ''}`}
          >
            Inicio
          </button>
          <button 
            onClick={() => handleTabChange('pesada')}
            className={`tab-btn ${tab === 'pesada' ? 'active' : ''}`}
          >
            Pestaña Pesada
          </button>
          {isPending && <Loader2 size={18} className="spinner accent-text" />}
        </div>

        <div className="tab-content card">
          <div className="pane-content">
            {tab === 'inicio' ? (
              <div className="empty-state">
                <Layout size={40} />
                <p>Esta es una pestaña ligera. Cambia a la pesada para ver useTransition en acción.</p>
              </div>
            ) : (
              <div style={{ opacity: isPending ? 0.5 : 1, transition: 'opacity 0.2s' }}>
                <h4>Contenido generado dinámicamente</h4>
                <SlowList text="Lista Pesada" />
              </div>
            )}
          </div>
        </div>

        <div className="info-note">
          <p>
            <strong>Prueba esto:</strong> Al cambiar a la pestaña pesada, la UI no se bloquea. 
            El indicador de carga aparece pero puedes seguir interactuando con la página.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .transition-tabs {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .tab-btn {
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .tab-btn.active {
          background-color: var(--accent-primary);
          color: white;
        }

        .slow-list-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 8px;
          margin-top: 16px;
        }

        .slow-item {
          font-size: 0.7rem;
          padding: 4px;
          background-color: var(--bg-tertiary);
          border-radius: 4px;
          color: var(--text-tertiary);
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default UseTransitionDemo;
