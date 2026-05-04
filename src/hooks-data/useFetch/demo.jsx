import React, { useState } from 'react';
import { useFetch } from '../../custom-hooks/useFetch';
import { Globe, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const UseFetchDemo = () => {
  const [postId, setPostId] = useState(1);
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Peticiones Simplificadas</h3>
        <p className="demo-desc">
          Un hook para abstraer la lógica de fetching, estados de carga y manejo de errores globales.
        </p>

        <div className="card" style={{ maxWidth: '500px' }}>
          <div className="pane-header">Consumo de API Externa</div>
          <div className="pane-content">
            <div className="fetch-controls">
              <button 
                onClick={() => setPostId(id => Math.max(1, id - 1))} 
                className="demo-btn outline"
                disabled={loading || postId <= 1}
              >
                Anterior
              </button>
              <span className="post-id-badge">Post ID: {postId}</span>
              <button 
                onClick={() => setPostId(id => id + 1)} 
                className="demo-btn outline"
                disabled={loading}
              >
                Siguiente
              </button>
            </div>

            <div className="fetch-result-box">
              {loading ? (
                <div className="loading-state">
                  <Loader2 className="spinner" size={32} />
                  <p>Obteniendo datos...</p>
                </div>
              ) : error ? (
                <div className="error-state">
                  <AlertCircle size={32} color="#ef4444" />
                  <p>{error}</p>
                </div>
              ) : (
                <div className="data-display">
                  <h4>{data?.title}</h4>
                  <p>{data?.body}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .fetch-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .post-id-badge {
          font-weight: 700;
          color: var(--accent-primary);
          background-color: var(--accent-glow);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .fetch-result-box {
          min-height: 150px;
          background-color: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 24px;
        }

        .data-display h4 {
          margin-top: 0;
          color: var(--text-primary);
          text-transform: capitalize;
        }

        .data-display p {
          color: var(--text-secondary);
          line-height: 1.5;
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

export default UseFetchDemo;
