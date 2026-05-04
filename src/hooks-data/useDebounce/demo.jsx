import React, { useState } from 'react';
import { useDebounce } from '../../custom-hooks/useDebounce';
import { Search, Zap, Clock } from 'lucide-react';

const UseDebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Control de Frecuencia</h3>
        <p className="demo-desc">
          Un hook que retrasa la actualización de un valor hasta que ha pasado un tiempo sin cambios. Ideal para buscadores.
        </p>

        <div className="card" style={{ maxWidth: '500px' }}>
          <div className="pane-content">
            <div className="field-group">
              <label>Buscador (con 500ms de retraso)</label>
              <div className="input-with-icon">
                <Search size={18} className="search-icon-input" />
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="demo-input"
                  placeholder="Escribe algo rápido..."
                  style={{ paddingLeft: '40px' }}
                />
              </div>
            </div>

            <div className="debounce-comparison">
              <div className="comparison-item">
                <div className="comp-label">
                  <Zap size={14} />
                  <span>Valor Instantáneo:</span>
                </div>
                <div className="comp-value">{searchTerm || '...'}</div>
              </div>

              <div className="comparison-item highlighted">
                <div className="comp-label">
                  <Clock size={14} />
                  <span>Valor Debounced:</span>
                </div>
                <div className="comp-value">{debouncedSearchTerm || '...'}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-note">
          <p>
            <strong>Prueba:</strong> Escribe una palabra completa rápidamente. 
            Verás que el "Valor Instantáneo" cambia con cada letra, pero el "Debounced" solo 
            se actualiza cuando dejas de escribir por medio segundo.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .input-with-icon {
          position: relative;
        }

        .search-icon-input {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .debounce-comparison {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .comparison-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }

        .comparison-item.highlighted {
          background-color: var(--accent-glow);
          border: 1px solid var(--accent-primary);
        }

        .comp-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .comp-value {
          font-family: var(--font-mono);
          color: var(--accent-primary);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default UseDebounceDemo;
