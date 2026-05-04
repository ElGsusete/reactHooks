import React from 'react';
import { useFormStatus } from 'react-dom'; // Nota: useFormStatus está en react-dom
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

// Componente hijo que accede al estado del formulario padre
const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`demo-btn full-width ${pending ? 'secondary' : 'primary'}`}
    >
      {pending ? (
        <>
          <Loader2 size={18} className="spinner" />
          <span>Procesando {data?.get('username')}...</span>
        </>
      ) : (
        <>
          <Send size={18} />
          <span>Registrar Usuario</span>
        </>
      )}
    </button>
  );
};

const UseFormStatusDemo = () => {
  const [success, setSuccess] = React.useState(false);

  async function handleAction(formData) {
    // Simulamos guardado
    await new Promise(res => setTimeout(res, 2000));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Estado Automático de Formularios</h3>
        <p className="demo-desc">
          Accede a la información de envío del formulario (como si está pendiente) sin necesidad de estados manuales.
        </p>

        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="pane-content">
            {success ? (
              <div className="success-message">
                <CheckCircle2 size={48} color="#22c55e" />
                <h4>¡Usuario registrado!</h4>
                <p>El formulario se ha procesado correctamente.</p>
              </div>
            ) : (
              <form action={handleAction} className="status-form">
                <div className="field-group">
                  <label>Nombre de Usuario</label>
                  <input name="username" className="demo-input" required placeholder="Ej: john_doe" />
                </div>
                <div className="field-group">
                  <label>Email</label>
                  <input name="email" type="email" className="demo-input" required placeholder="john@example.com" />
                </div>

                {/* SubmitButton usa useFormStatus internamente */}
                <SubmitButton />
              </form>
            )}
          </div>
        </div>

        <div className="info-note">
          <p>
            <strong>Importante:</strong> 'useFormStatus' solo funciona si el botón está
            DENTRO de una etiqueta <code>{'<form>'}</code> y el formulario usa una <strong>Action</strong> de React 19.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .status-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .success-message {
          text-align: center;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
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

export default UseFormStatusDemo;
