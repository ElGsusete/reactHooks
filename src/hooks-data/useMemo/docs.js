export const useMemoDocs = `
### ¿Qué es useMemo?
Es un hook que permite **memorizar un valor calculado**. Sirve para optimizar el rendimiento evitando cálculos costosos en cada renderizado.

### Cómo funciona
Recibe una función de creación y un array de dependencias. React solo volverá a ejecutar la función si alguna de las dependencias ha cambiado. En caso contrario, devuelve el valor almacenado en caché.

### Cuándo usarlo
1. **Cálculos pesados**: Operaciones matemáticas complejas, procesamiento de grandes arrays, filtrados masivos.
2. **Estabilidad de referencia**: Cuando pasas un objeto o array a un componente hijo optimizado (\`React.memo\`) y quieres evitar que el hijo se re-renderice porque la referencia del objeto cambia en cada render.

### Diferencia con useCallback
- \`useMemo\`: Memoriza el **resultado** de ejecutar una función.
- \`useCallback\`: Memoriza la **propia función**.

### Advertencia: No optimices prematuramente
Memorizar tiene un coste de memoria y CPU (comparar dependencias). Úsalo solo si has detectado un problema de rendimiento real.
`;
