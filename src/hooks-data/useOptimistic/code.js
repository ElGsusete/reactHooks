export const useOptimisticCode = `import { useOptimistic, useState } from 'react';

function ChatApp({ messages }) {
  // Estado optimista
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  async function formAction(formData) {
    const message = formData.get('message');
    
    // Disparar actualización optimista
    addOptimistic(message);
    
    // Realizar acción real (ej. API)
    await sendMessage(message);
  }

  return (
    <form action={formAction}>
      {optimisticMessages.map(m => (
        <div key={m.id}>
          {m.text} {m.sending && '(Enviando...)'}
        </div>
      ))}
      <input name="message" />
      <button type="submit">Enviar</button>
    </form>
  );
}`;
