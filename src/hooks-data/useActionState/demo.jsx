import React, { useActionState } from 'react';
import { LogIn, AlertCircle, CheckCircle } from 'lucide-react';

// Acción del servidor simulada
async function loginAction(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  await new Promise(res => setTimeout(res, 1000));

  if (password !== 'react19') {
    return { error: 'Contraseña incorrecta. Pista: react19', success: false };
  }

  return { error: null, success: true, user: email };
}

const UseActionStateDemo = () => {
  // useActionState gestiona el estado devuelto por una acción de formulario
  // [estado, acciónEnvoltorio, estaPendiente]
  const [state, formAction, isPending] = useActionState(loginAction, {
    error: null,
    success: false
  });

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Gestión de Estado de Acciones</h3>
        <p className="demo-desc">
          Simplifica el manejo de resultados de formularios, errores y estados de carga en un solo hook.
        </p>

        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="pane-content">
            {state.success ? (
              <div className="success-state">
                <CheckCircle size={40} color="#22c55e" />
                <p>Bienvenido, <strong>{state.user}</strong></p>
                <button onClick={() => window.location.reload()} className="demo-btn outline">Salir</button>
              </div>
            ) : (
              <form action={formAction} className="action-form">
                <div className="field-group">
                  <label>Email</label>
                  <input name="email" type="email" defaultValue="admin@example.com" className="demo-input" required />
                </div>
                <div className="field-group">
                  <label>Contraseña</label>
                  <input name="password" type="password" className="demo-input" required placeholder="Pista en el error..." />
                </div>

                {state.error && (
                  <div className="error-badge">
                    <AlertCircle size={16} />
                    <span>{state.error}</span>
                  </div>
                )}

                <button type="submit" disabled={isPending} className="demo-btn primary full-width">
                  {isPending ? 'Validando...' : 'Entrar'}
                  {!isPending && <LogIn size={18} style={{ marginLeft: '8px' }} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .action-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .error-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
        }

        .success-state {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default UseActionStateDemo;
