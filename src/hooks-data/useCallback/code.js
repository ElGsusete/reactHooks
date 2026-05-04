export const useCallbackCode = `import React, { useState, useCallback } from 'react';

// Componente que queremos optimizar
const MyButton = React.memo(({ onClick, label }) => {
  console.log(\`Renderizando \${label}\`);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // useCallback memoriza la FUNCIÓN
  // Evita que MyButton se re-renderice innecesariamente
  const handleClick = useCallback(() => {
    console.log('Botón pulsado');
  }, []); // Referencia estable

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      
      <MyButton onClick={handleClick} label="Boton Memorizado" />
    </div>
  );
}`;
