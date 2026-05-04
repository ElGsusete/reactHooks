import React from 'react';
import { UserConfigProvider, useUserConfig } from '../../context/UserConfigContext';
import { Settings, Bell, BellOff, Languages, Type } from 'lucide-react';

const SettingsPanel = () => {
  const { config, updateConfig } = useUserConfig();

  return (
    <div className="card">
      <div className="pane-header">Panel de Configuración</div>
      <div className="pane-content settings-grid">
        <div className="setting-item">
          <div className="setting-info">
            <Languages size={20} />
            <div>
              <p className="setting-label">Idioma</p>
              <p className="setting-value">{config.language}</p>
            </div>
          </div>
          <select 
            value={config.language} 
            onChange={(e) => updateConfig({ language: e.target.value })}
            className="demo-select"
          >
            <option>Español</option>
            <option>English</option>
            <option>Français</option>
          </select>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            {config.notifications ? <Bell size={20} /> : <BellOff size={20} />}
            <div>
              <p className="setting-label">Notificaciones</p>
              <p className="setting-value">{config.notifications ? 'Activadas' : 'Silenciadas'}</p>
            </div>
          </div>
          <button 
            onClick={() => updateConfig({ notifications: !config.notifications })}
            className={`demo-btn ${config.notifications ? 'primary' : 'outline'}`}
          >
            {config.notifications ? 'Desactivar' : 'Activar'}
          </button>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <Type size={20} />
            <div>
              <p className="setting-label">Tamaño de Fuente</p>
              <p className="setting-value">{config.fontSize}</p>
            </div>
          </div>
          <div className="btn-group">
            <button 
              onClick={() => updateConfig({ fontSize: 'small' })} 
              className={`demo-btn ${config.fontSize === 'small' ? 'secondary' : 'outline'}`}
            >
              Pequeño
            </button>
            <button 
              onClick={() => updateConfig({ fontSize: 'normal' })} 
              className={`demo-btn ${config.fontSize === 'normal' ? 'secondary' : 'outline'}`}
            >
              Normal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseContextDemo = () => {
  return (
    <UserConfigProvider>
      <div className="demo-container">
        <div className="demo-section">
          <h3>Prop Drilling vs Context</h3>
          <p className="demo-desc">
            useContext permite acceder a datos globales sin pasarlos manualmente a través de cada componente.
          </p>
          <SettingsPanel />
        </div>

        <style jsx="true">{`
          .settings-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .setting-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid var(--border-color);
          }

          .setting-item:last-child {
            border-bottom: none;
          }

          .setting-info {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .setting-label {
            font-size: 0.8rem;
            color: var(--text-tertiary);
            margin: 0;
            text-transform: uppercase;
          }

          .setting-value {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0;
          }

          .demo-select {
            padding: 8px 12px;
            border-radius: var(--radius-sm);
            background-color: var(--bg-primary);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
          }
        `}</style>
      </div>
    </UserConfigProvider>
  );
};

export default UseContextDemo;
