import React, { useState, useLayoutEffect, useRef } from 'react';
import { Maximize, Ruler } from 'lucide-react';

const UseLayoutEffectDemo = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [content, setContent] = useState('Texto corto');
  const boxRef = useRef(null);

  // useLayoutEffect se ejecuta de forma síncrona después de todas las mutaciones del DOM
  // pero ANTES de que el navegador pinte. Esto evita parpadeos visuales al medir.
  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [content]); // Se ejecuta cada vez que el contenido cambia

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Medición del DOM en tiempo real</h3>
        <p className="demo-desc">
          Cambia el contenido para ver cómo se mide el tamaño exacto del elemento antes del repintado.
        </p>

        <div className="layout-demo-box">
          <div className="controls">
            <button 
              onClick={() => setContent('¡Este es un texto mucho más largo para forzar un cambio de tamaño!')}
              className="demo-btn secondary"
            >
              Texto Largo
            </button>
            <button 
              onClick={() => setContent('Corto')}
              className="demo-btn outline"
            >
              Texto Corto
            </button>
          </div>

          <div className="measurement-card card">
            <div ref={boxRef} className="resizable-box">
              {content}
            </div>
            <div className="stats">
              <div className="stat-item">
                <Ruler size={16} />
                <span>Ancho: {Math.round(size.width)}px</span>
              </div>
              <div className="stat-item">
                <Maximize size={16} />
                <span>Alto: {Math.round(size.height)}px</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .layout-demo-box {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .controls {
          display: flex;
          gap: 12px;
        }

        .measurement-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          max-width: 400px;
        }

        .resizable-box {
          padding: 32px;
          background-color: var(--accent-glow);
          color: var(--accent-primary);
          font-weight: 600;
          text-align: center;
          transition: none; /* Importante: sin transiciones para ver la medición síncrona */
        }

        .stats {
          display: flex;
          justify-content: space-around;
          padding: 16px;
          background-color: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default UseLayoutEffectDemo;
