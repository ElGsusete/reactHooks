export const useStateCode = `import React, { useState } from 'react';

function Counter() {
  // Declaramos una variable de estado llamada "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

// Ejemplo con objetos
function Profile() {
  const [user, setUser] = useState({ name: 'Alex', age: 25 });

  const updateAge = () => {
    // IMPORTANTE: Siempre copia el objeto anterior
    setUser(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Edad: {user.age}</p>
      <button onClick={updateAge}>Cumplir años</button>
    </div>
  );
}`;
