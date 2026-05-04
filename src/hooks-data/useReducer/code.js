export const useReducerCode = `import React, { useReducer } from 'react';

// 1. Definimos el estado inicial
const initialState = { count: 0 };

// 2. Definimos la función reductora (reducer)
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  // 3. Inicializamos el hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Cuenta: {state.count}</p>
      {/* 4. Despachamos acciones */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`;
