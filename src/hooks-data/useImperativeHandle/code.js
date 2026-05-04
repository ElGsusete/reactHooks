export const useImperativeHandleCode = `import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// El componente hijo debe usar forwardRef
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Definimos qué métodos exponemos al padre
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    scrollIntoView: () => {
      inputRef.current.scrollIntoView();
    }
  }));

  return <input ref={inputRef} />;
});

function Parent() {
  const inputRef = useRef(null);

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus desde el padre
      </button>
    </>
  );
}`;
