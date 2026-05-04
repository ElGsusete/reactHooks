export const useMemoCode = `import React, { useState, useMemo } from 'react';

function ExpensiveApp() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Manzana', 'Pera', 'Plátano']);

  // useMemo memoriza el valor de retorno
  const totalLetters = useMemo(() => {
    console.log('Contando letras...');
    return items.reduce((acc, item) => acc + item.length, 0);
  }, [items]); // Solo se recalcula si "items" cambia

  return (
    <div>
      <p>Total letras: {totalLetters}</p>
      <button onClick={() => setCount(count + 1)}>
        Re-renderizar ({count})
      </button>
      <button onClick={() => setItems([...items, 'Kiwi'])}>
        Añadir item
      </button>
    </div>
  );
}`;
