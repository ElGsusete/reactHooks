import React, { useRef, useState } from 'react';
import { Target, MousePointer2, RefreshCw } from 'lucide-react';

const UseRefDemo = () => {
  const [renders, setRenders] = useState(0);
  const inputRef = useRef(null);
  const clickCountRef = useRef(0);

  const focusInput = () => {
    // Uso 1: Acceso directo al DOM
    inputRef.current?.focus();
  };

  const incrementSilent = () => {
    // Uso 2: Almacenar valores mutables sin provocar re-renderizados
    clickCountRef.current += 1;
    console.log('Clics internos:', clickCountRef.current);
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Referencia Persistente</h3>
        <p className="demo-desc">
          Accede al DOM directamente o guarda valores que no deben disparar un nuevo renderizado.
        </p>

        <div className="ref-grid">
          <div className="card">
            <div className="pane-header">Control del DOM</div>
            <div className="pane-content">
              <div className="input-with-btn">
                <input 
                  ref={inputRef} 
                  type="text" 
                  placeholder="Pulsa el botón para enfocar..."
                  className="demo-input"
                />
                <button onClick={focusInput} className="demo-btn primary">
                  <Target size={18} />
                  Enfocar
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="pane-header">Estado Silencioso</div>
            <div className="pane-content">
              <div className="silent-stats">
                <div className="stat">
                  <MousePointer2 size={18} />
                  <span>Clics (useRef): {clickCountRef.current}</span>
                </div>
                <div className="stat">
                  <RefreshCw size={18} />
                  <span>Renders UI: {renders}</span>
                </div>
              </div>
              <div className="btn-group-vertical">
                <button onClick={incrementSilent} className="demo-btn outline">
                  Sumar Clic (No renderiza)
                </button>
                <button onClick={() => setRenders(r => r + 1)} className="demo-btn secondary">
                  Forzar Render (Para ver cambios)
                </button>
              </div>
              <p className="hint">Fíjate que el contador de clics no se actualiza en la UI hasta que fuerzas un render.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .ref-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-with-btn {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .silent-stats {
          margin-bottom: 16px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .btn-group-vertical {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (max-width: 600px) {
          .ref-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default UseRefDemo;
