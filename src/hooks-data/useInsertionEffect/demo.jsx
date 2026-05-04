import React, { useInsertionEffect } from 'react';
import { Palette, Info } from 'lucide-react';

const UseInsertionEffectDemo = () => {
  // useInsertionEffect está pensado para librerías de CSS-in-JS.
  // Se ejecuta antes de cualquier mutación del DOM y antes de useLayoutEffect.
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .dynamic-injected-box {
        background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        color: white;
        padding: 24px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Inyección de Estilos Críticos</h3>
        <p className="demo-desc">
          Este hook permite inyectar estilos en el DOM antes de que se ejecuten otros efectos o el layout.
        </p>

        <div className="card">
          <div className="pane-content">
            <div className="dynamic-injected-box">
              <Palette size={32} style={{ marginBottom: '12px' }} />
              <p>Este elemento usa estilos inyectados mediante <strong>useInsertionEffect</strong>.</p>
            </div>
            
            <div className="info-note">
              <Info size={16} />
              <p>Nota: Este hook es principalmente para autores de librerías (como CSS-in-JS).</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .info-note {
          margin-top: 24px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .info-note p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default UseInsertionEffectDemo;
