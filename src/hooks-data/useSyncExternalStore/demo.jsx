import React, { useSyncExternalStore } from 'react';
import { Share2, Monitor, Smartphone } from 'lucide-react';

// Suscriptor al estado externo (en este caso, el tamaño de la ventana)
function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

// Selector del valor actual
function getSnapshot() {
  return window.innerWidth;
}

// Opcional: Selector para SSR
function getServerSnapshot() {
  return 1024; // Valor por defecto en servidor
}

const UseSyncExternalStoreDemo = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Sincronización con Estados Externos</h3>
        <p className="demo-desc">
          Conecta de forma segura tus componentes con fuentes de datos externas a React (Store de Redux, APIs del navegador, etc.) evitando "tearing".
        </p>

        <div className="card">
          <div className="pane-header">Fuente: Window API</div>
          <div className="pane-content">
            <div className="responsive-preview">
              <div className="icon-row">
                <Smartphone className={width < 600 ? 'active-device' : ''} />
                <Monitor className={width >= 600 ? 'active-device' : ''} />
              </div>
              <p className="width-display">Ancho de ventana: <strong>{width}px</strong></p>
            </div>
            
            <div className="info-note">
              <Share2 size={18} />
              <p>Cambia el tamaño del navegador para ver cómo React se sincroniza instantáneamente con el evento global.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .responsive-preview {
          text-align: center;
          padding: 20px;
        }

        .icon-row {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 16px;
          color: var(--text-tertiary);
        }

        .icon-row svg {
          width: 48px;
          height: 48px;
          transition: color 0.3s;
        }

        .active-device {
          color: var(--accent-primary);
          filter: drop-shadow(0 0 8px var(--accent-glow));
        }

        .width-display {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default UseSyncExternalStoreDemo;
