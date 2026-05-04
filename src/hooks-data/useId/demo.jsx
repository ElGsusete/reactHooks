import React, { useId } from 'react';
import { Fingerprint, Copy } from 'lucide-react';

const FormField = ({ label }) => {
  // Genera un ID único y estable para esta instancia del componente
  const id = useId();

  return (
    <div className="field-group">
      <label htmlFor={id}>{label}</label>
      <div className="id-preview">
        <input id={id} type="text" className="demo-input" placeholder="Escribe aquí..." />
        <span className="badge">ID: {id}</span>
      </div>
    </div>
  );
};

const UseIdDemo = () => {
  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>IDs Únicos y Accesibilidad</h3>
        <p className="demo-desc">
          Genera identificadores estables para atributos de accesibilidad como 'htmlFor' o 'aria-describedby'.
        </p>

        <div className="card">
          <div className="pane-header">Múltiples instancias del mismo componente</div>
          <div className="pane-content">
            <FormField label="Nombre de usuario" />
            <FormField label="Correo electrónico" />
            <FormField label="Contraseña" />
          </div>
        </div>

        <div className="info-note">
          <Fingerprint size={18} />
          <p>
            Nota: Estos IDs son estables incluso durante el Server-Side Rendering (SSR), 
            evitando errores de hidratación.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .field-group {
          margin-bottom: 20px;
        }

        .field-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-secondary);
        }

        .id-preview {
          position: relative;
        }

        .badge {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background-color: var(--bg-tertiary);
          padding: 4px 8px;
          border-radius: 4px;
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  );
};

export default UseIdDemo;
