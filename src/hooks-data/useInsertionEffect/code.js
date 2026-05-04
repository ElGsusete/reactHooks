export const useInsertionEffectCode = `import React, { useInsertionEffect } from 'react';

function MyInjectedComponent() {
  // Solo se usa para librerías CSS-in-JS
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = '.my-class { color: red; }';
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return <div className="my-class">Hola Mundo</div>;
}`;
