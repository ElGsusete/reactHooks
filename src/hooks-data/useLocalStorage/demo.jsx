import React from 'react';
import { useLocalStorage } from '../../custom-hooks/useLocalStorage';
import { Save, Trash2, Info } from 'lucide-react';

const UseLocalStorageDemo = () => {
  const [name, setName] = useLocalStorage('demo-name', 'Invitado');
  const [theme, setTheme] = useLocalStorage('demo-theme', 'light');

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Persistencia Local</h3>
        <p className="demo-desc">
          Un hook que sincroniza el estado de React con el almacenamiento del navegador (localStorage).
        </p>

        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="pane-header">Perfil de Usuario Persistente</div>
          <div className="pane-content">
            <div className="field-group">
              <label>Tu Nombre (se guarda al escribir)</label>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="demo-input"
              />
            </div>
            
            <div className="field-group">
              <label>Modo de Color Preferido</label>
              <div className="btn-group">
                <button 
                  onClick={() => setTheme('light')}
                  className={`demo-btn ${theme === 'light' ? 'primary' : 'outline'}`}
                >
                  Claro
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={`demo-btn ${theme === 'dark' ? 'primary' : 'outline'}`}
                >
                  Oscuro
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                localStorage.removeItem('demo-name');
                localStorage.removeItem('demo-theme');
                window.location.reload();
              }} 
              className="demo-btn secondary full-width"
              style={{ marginTop: '16px' }}
            >
              <Trash2 size={16} />
              Limpiar Storage y Recargar
            </button>
          </div>
        </div>

        <div className="info-note">
          <Info size={18} />
          <p>Prueba a escribir algo y recargar la página. Verás que los valores se mantienen.</p>
        </div>
      </div>
    </div>
  );
};

export default UseLocalStorageDemo;
