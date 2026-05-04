import React, { useState, useEffect, useDebugValue } from 'react';
import { Wifi, WifiOff, Bug } from 'lucide-react';

// Custom hook con useDebugValue
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Proporciona una etiqueta para las React DevTools
  useDebugValue(isOnline ? 'Online ✅' : 'Offline ❌');

  return isOnline;
}

const UseDebugValueDemo = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Depuración en DevTools</h3>
        <p className="demo-desc">
          Añade etiquetas informativas a tus hooks personalizados para que sean más fáciles de depurar en las herramientas de desarrollo de React.
        </p>

        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="pane-content">
            <div className="status-indicator">
              {isOnline ? (
                <div className="status-badge online">
                  <Wifi size={24} />
                  <span>Conectado a Internet</span>
                </div>
              ) : (
                <div className="status-badge offline">
                  <WifiOff size={24} />
                  <span>Sin conexión</span>
                </div>
              )}
            </div>
            
            <div className="dev-note">
              <Bug size={18} />
              <p>
                Abre las <strong>React DevTools</strong>, selecciona este componente y busca 
                el hook "OnlineStatus" para ver la etiqueta personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .status-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-radius: var(--radius-md);
          font-weight: 700;
        }

        .status-badge.online {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .status-badge.offline {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .dev-note {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          padding: 12px;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--text-tertiary);
        }
      `}</style>
    </div>
  );
};

export default UseDebugValueDemo;
