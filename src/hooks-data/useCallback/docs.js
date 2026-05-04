export const useCallbackDocs = `
### ¿Qué es useCallback?
Es un hook que devuelve una **versión memorizada de una función**. Solo cambia si alguna de sus dependencias ha cambiado.

### El Problema de la Referencia
En JavaScript, cada vez que defines una función dentro de un componente, se crea un nuevo objeto en memoria. 
Esto significa que si pasas esa función como prop a un componente hijo, el hijo verá una "nueva prop" en cada renderizado del padre, invalidando optimizaciones como \`React.memo\`.

### Cuándo usarlo
- Cuando pasas callbacks a componentes hijos optimizados con \`React.memo\`.
- Cuando la función es una dependencia de otro hook (ej. un \`useEffect\` que llama a esa función).

### Diferencia con useMemo
- \`useMemo\`: Se usa para **valores** (objetos, arrays, resultados de cálculos).
- \`useCallback\`: Se usa específicamente para **funciones**.

### Regla de Oro
Solo tiene sentido usar \`useCallback\` si el componente que recibe la función está optimizado. Memorizar una función para pasarla a un elemento nativo (como un \`<button>\`) no aporta ninguna ventaja de rendimiento.
`;
