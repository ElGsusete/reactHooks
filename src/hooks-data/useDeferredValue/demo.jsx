import React, { useState, useDeferredValue, memo } from 'react';
import { Search, Hourglass } from 'lucide-react';

// Componente pesado que renderiza los resultados
const SlowResults = memo(({ query }) => {
  // Simulamos un retraso artificial en el renderizado
  const startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Bloqueamos el hilo por 100ms para cada renderizado
  }

  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Resultado {i} para "{query}"</li>);
  }

  return <ul className="deferred-list">{items}</ul>;
});

const UseDeferredValueDemo = () => {
  const [query, setQuery] = useState('');
  
  // useDeferredValue devuelve una copia del valor que se "retrasa" 
  // si el sistema está ocupado.
  const deferredQuery = useDeferredValue(query);

  const isStale = query !== deferredQuery;

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Valores Diferidos</h3>
        <p className="demo-desc">
          Permite que un valor "se quede atrás" mientras el usuario sigue interactuando, evitando lag en inputs.
        </p>

        <div className="search-box-large card">
          <div className="pane-content">
            <div className="input-with-status">
              <div className="input-wrapper">
                <Search size={20} className="search-icon-demo" />
                <input 
                  type="text" 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Escribe rápido para ver el efecto..."
                  className="demo-input-large"
                />
              </div>
              {isStale && <div className="stale-badge"><Hourglass size={14} /> Actualizando...</div>}
            </div>

            <div className={`results-container ${isStale ? 'stale' : ''}`}>
              <SlowResults query={deferredQuery} />
            </div>
          </div>
        </div>

        <div className="info-note">
          <p>
            <strong>Observa:</strong> Al escribir rápido, el input fluye suavemente. 
            La lista de abajo se actualiza con un pequeño retraso, mostrando el valor "anterior" hasta que React tiene tiempo de procesar el nuevo.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .demo-input-large {
          width: 100%;
          padding: 14px 14px 14px 44px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .input-wrapper {
          position: relative;
          flex: 1;
        }

        .search-icon-demo {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .input-with-status {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .stale-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-primary);
          background-color: var(--accent-glow);
          padding: 4px 10px;
          border-radius: 4px;
          align-self: flex-start;
        }

        .results-container {
          transition: opacity 0.3s;
        }

        .results-container.stale {
          opacity: 0.5;
        }

        .deferred-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
        }

        .deferred-list li {
          padding: 10px;
          background-color: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default UseDeferredValueDemo;
