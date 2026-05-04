export const useDebugValueCode = `import React, { useDebugValue, useState } from 'react';

function useMyCustomHook(id) {
  const [data, setData] = useState(null);

  // Muestra una etiqueta en las React DevTools
  // Ejemplo: "MyCustomHook: Cargando..."
  useDebugValue(data ? 'Datos Listos' : 'Cargando...');

  // También puedes pasar una función de formateo como segundo argumento
  // para evitar cálculos costosos si las DevTools no están abiertas
  useDebugValue(data, d => d ? d.name.toUpperCase() : 'N/A');

  return data;
}`;
