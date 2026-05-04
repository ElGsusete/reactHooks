export const useRefCode = `import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  // 1. Inicializar la referencia
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 2. Acceder al elemento DOM a través de .current
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function Timer() {
  // 3. Guardar un valor persistente que NO dispara renders
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}`;
