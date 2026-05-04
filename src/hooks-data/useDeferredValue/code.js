export const useDeferredValueCode = `import React, { useState, useDeferredValue } from 'react';

function SearchResults({ query }) {
  // query es el valor "diferido"
  return <div>Buscando resultados para: {query}</div>;
}

function App() {
  const [text, setText] = useState('');
  
  // Creamos una versión diferida del texto
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      {/* Pasamos el valor diferido al componente pesado */}
      <SearchResults query={deferredText} />
    </>
  );
}`;
