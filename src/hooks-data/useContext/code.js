export const useContextCode = `import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    // 2. Proveer el contexto
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 3. Consumir el contexto (sin props intermedias)
  const theme = useContext(ThemeContext);
  return <button className={theme}>Botón {theme}</button>;
}`;
