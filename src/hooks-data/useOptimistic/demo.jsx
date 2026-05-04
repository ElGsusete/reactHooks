import React, { useOptimistic, useState, useRef } from 'react';
import { Send, Check, Clock } from 'lucide-react';

const UseOptimisticDemo = () => {
  const [messages, setMessages] = useState([
    { text: "¡Hola! Prueba el estado optimista.", id: 1, sending: false }
  ]);
  const formRef = useRef(null);

  // useOptimistic gestiona el estado temporal mientras se resuelve una acción
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { text: newMessage, id: Date.now(), sending: true }
    ]
  );

  const sendMessage = async (formData) => {
    const message = formData.get('message');
    if (!message) return;

    formRef.current?.reset();
    
    // 1. Actualizamos la UI inmediatamente de forma optimista
    addOptimisticMessage(message);

    // 2. Simulamos la petición al servidor
    await new Promise(res => setTimeout(res, 2000));

    // 3. Cuando el servidor responde, actualizamos el estado real
    setMessages(prev => [
      ...prev,
      { text: message, id: Date.now(), sending: false }
    ]);
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Interfaz de Respuesta Inmediata</h3>
        <p className="demo-desc">
          Muestra cambios en la UI antes de que el servidor responda, mejorando la percepción de velocidad.
        </p>

        <div className="chat-container card">
          <div className="pane-content chat-history">
            {optimisticMessages.map((msg) => (
              <div key={msg.id} className={`chat-bubble ${msg.sending ? 'pending' : 'sent'}`}>
                <span>{msg.text}</span>
                <div className="status-icon">
                  {msg.sending ? <Clock size={12} /> : <Check size={12} />}
                </div>
              </div>
            ))}
          </div>
          
          <form ref={formRef} action={sendMessage} className="chat-input-area">
            <input 
              name="message" 
              placeholder="Escribe un mensaje..." 
              className="demo-input"
              autoComplete="off"
            />
            <button type="submit" className="demo-btn primary icon-only">
              <Send size={18} />
            </button>
          </form>
        </div>
        
        <p className="hint" style={{ marginTop: '16px' }}>
          Observa cómo el mensaje aparece <strong>al instante</strong> con un icono de reloj, 
          y cambia a check tras 2 segundos.
        </p>
      </div>

      <style jsx="true">{`
        .chat-container {
          max-width: 450px;
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .chat-history {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
        }

        .chat-bubble {
          padding: 10px 14px;
          border-radius: 18px;
          max-width: 80%;
          font-size: 0.95rem;
          display: flex;
          align-items: flex-end;
          gap: 8px;
          align-self: flex-end;
        }

        .chat-bubble.sent {
          background-color: var(--accent-primary);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .chat-bubble.pending {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          border-bottom-right-radius: 4px;
          opacity: 0.7;
        }

        .status-icon {
          opacity: 0.7;
        }

        .chat-input-area {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 10px;
        }

        .icon-only {
          padding: 10px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default UseOptimisticDemo;
