import React, { use, Suspense, useState } from 'react';
import { Quote, RefreshCcw, Loader2 } from 'lucide-react';

// Simulamos una promesa que carga datos
const fetchMessage = async () => {
  await new Promise(res => setTimeout(res, 1500));
  return "La mejor forma de predecir el futuro es inventarlo. — Alan Kay";
};

// En React 19, podemos usar use() para leer promesas directamente en el renderizado
const Message = ({ messagePromise }) => {
  const content = use(messagePromise);
  return (
    <div className="message-content">
      <Quote size={32} className="quote-icon" />
      <p>{content}</p>
    </div>
  );
};

const UseDemo = () => {
  const [promise, setPromise] = useState(() => fetchMessage());

  const handleRefresh = () => {
    setPromise(fetchMessage());
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Lectura de Promesas y Contexto</h3>
        <p className="demo-desc">
          El nuevo hook 'use' permite leer recursos (como promesas o contextos) condicionalmente y directamente en el render.
        </p>

        <div className="card">
          <div className="pane-content">
            <Suspense fallback={
              <div className="loading-placeholder">
                <Loader2 size={32} className="spinner" />
                <p>Esperando a la promesa...</p>
              </div>
            }>
              <Message messagePromise={promise} />
            </Suspense>

            <button onClick={handleRefresh} className="demo-btn outline full-width" style={{ marginTop: '24px' }}>
              <RefreshCcw size={18} />
              Refrescar mensaje
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .message-content {
          text-align: center;
          padding: 20px;
        }

        .quote-icon {
          color: var(--accent-primary);
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .message-content p {
          font-size: 1.2rem;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .loading-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 40px 0;
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

export default UseDemo;
