import React, { useState, useCallback, memo } from 'react';
import { UserPlus, UserMinus, History } from 'lucide-react';

// Componente hijo optimizado con React.memo
// Solo se re-renderiza si sus PROPS cambian.
const UserItem = memo(({ name, onDelete }) => {
  console.log(`Renderizando item: ${name}`);
  return (
    <div className="user-list-item">
      <span>{name}</span>
      <button onClick={() => onDelete(name)} className="delete-icon-btn">
        <UserMinus size={16} />
      </button>
    </div>
  );
});

const UseCallbackDemo = () => {
  const [users, setUsers] = useState(['Ana', 'Berto', 'Carla']);
  const [count, setCount] = useState(0);

  // useCallback memoriza la REFERENCIA de la función.
  // Si no usáramos esto, la función se crearía de nuevo en cada render,
  // rompiendo la optimización de React.memo en los hijos.
  const handleDelete = useCallback((name) => {
    setUsers(prev => prev.filter(u => u !== name));
  }, []); // Dependencias vacías -> la función es estable para siempre

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Estabilidad de Funciones</h3>
        <p className="demo-desc">
          Evita re-renders innecesarios en componentes hijos pasando funciones con referencia estable.
        </p>

        <div className="callback-layout">
          <div className="card">
            <div className="pane-header">Lista de Usuarios (Hijos optimizados)</div>
            <div className="pane-content">
              <div className="user-list">
                {users.map(user => (
                  <UserItem key={user} name={user} onDelete={handleDelete} />
                ))}
              </div>
              <button 
                onClick={() => setUsers([...users, `User_${Date.now().toString().slice(-4)}`])}
                className="demo-btn secondary full-width"
                style={{ marginTop: '16px' }}
              >
                <UserPlus size={18} />
                Añadir Usuario
              </button>
            </div>
          </div>

          <div className="card">
            <div className="pane-header">Estado del Padre</div>
            <div className="pane-content">
              <div className="counter-box-mini">
                <History size={24} />
                <span>Re-renders padre: {count}</span>
              </div>
              <button onClick={() => setCount(c => c + 1)} className="demo-btn primary full-width">
                Re-renderizar Padre
              </button>
              <p className="hint">
                Al pulsar este botón, el padre se renderiza pero los hijos **no**, 
                porque 'handleDelete' mantiene su referencia gracias a useCallback.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .callback-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .user-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .user-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .delete-icon-btn {
          color: var(--text-tertiary);
          transition: color var(--transition-fast);
        }

        .delete-icon-btn:hover {
          color: #ef4444;
        }

        .counter-box-mini {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        @media (max-width: 600px) {
          .callback-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default UseCallbackDemo;
