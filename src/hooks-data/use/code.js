export const useCode = `import { use, Suspense } from 'react';

function Message({ messagePromise }) {
  // use() lee la promesa directamente. 
  // Suspende el componente hasta que se resuelve.
  const messageContent = use(messagePromise);
  return <p>Aquí está el mensaje: {messageContent}</p>;
}

function App() {
  const messagePromise = fetch('/api/message').then(res => res.text());

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}`;
