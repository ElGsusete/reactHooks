import React, { useState, useEffect } from 'react';
import { User, Loader2, RefreshCcw, Activity } from 'lucide-react';

const UseEffectDemo = () => {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Efecto 1: Timer (Cleanup demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Sin dependencias -> Solo al montar

  // Efecto 2: Fetching simulation
  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      setLoading(true);
      // Simulamos latencia de red
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (active) {
        setUserData({
          name: `Usuario ${userId}`,
          email: `user${userId}@example.com`,
          status: Math.random() > 0.5 ? 'En línea' : 'Ausente'
        });
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      active = false; // Cleanup para evitar fugas de memoria si el componente se desmonta
    };
  }, [userId]); // Depende de userId -> Se ejecuta cada vez que userId cambia

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Sincronización de Datos</h3>
        <p className="demo-desc">useEffect se ejecuta cuando cambian las dependencias. Haz clic para simular una nueva petición.</p>
        
        <div className="timer-badge">
          <Activity size={16} />
          <span>Tiempo en página: {seconds}s</span>
        </div>

        <div className="profile-card card">
          <div className="card-content">
            {loading ? (
              <div className="loading-state">
                <Loader2 size={32} className="spinner" />
                <p>Cargando datos...</p>
              </div>
            ) : (
              <div className="user-info">
                <div className="avatar">
                  <User size={40} />
                </div>
                <div className="details">
                  <h4>{userData?.name}</h4>
                  <p>{userData?.email}</p>
                  <span className={`status ${userData?.status === 'En línea' ? 'online' : ''}`}>
                    {userData?.status}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="card-actions">
            <button 
              onClick={() => setUserId(id => id + 1)} 
              className="demo-btn outline full-width"
              disabled={loading}
            >
              <RefreshCcw size={18} />
              Cargar siguiente usuario
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .timer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background-color: var(--accent-glow);
          color: var(--accent-primary);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .profile-card {
          max-width: 350px;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px 0;
          color: var(--text-tertiary);
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 60px;
          height: 60px;
          background-color: var(--bg-tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .details h4 {
          margin: 0;
          color: var(--text-primary);
        }

        .details p {
          margin: 4px 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .status {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        .status.online {
          color: #22c55e;
        }

        .card-actions {
          padding: 16px;
          border-top: 1px solid var(--border-color);
        }

        .full-width {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default UseEffectDemo;
