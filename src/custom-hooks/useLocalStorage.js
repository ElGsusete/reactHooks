import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Estado para guardar el valor
  // Se inicializa leyendo de localStorage o usando el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Función para actualizar el valor en estado y localStorage
  const setValue = (value) => {
    try {
      // Permitir que el valor sea una función para tener la misma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
