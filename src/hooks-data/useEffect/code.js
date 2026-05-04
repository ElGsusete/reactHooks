export const useEffectCode = `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 1. Se ejecuta después de cada renderizado (si no hay array)
  useEffect(() => {
    document.title = \`Clics: \${count}\`;
  });

  // 2. Se ejecuta solo una vez (array vacío)
  useEffect(() => {
    console.log('Componente montado');
  }, []);

  // 3. Se ejecuta cuando cambia una dependencia
  useEffect(() => {
    console.log('El contador cambió a:', count);
  }, [count]);

  // 4. Con función de limpieza (Cleanup)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => {
      // Se ejecuta al desmontar o antes de la próxima ejecución del efecto
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Clic
      </button>
    </div>
  );
}`;
