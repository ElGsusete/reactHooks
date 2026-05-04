export const useDebugValueDocs = `
### ¿Qué es useDebugValue?
Es un hook que se utiliza para mostrar una etiqueta para hooks personalizados en las **React Developer Tools**.

### Por qué usarlo
Cuando creas tus propios hooks, a veces es difícil saber qué está pasando dentro de ellos solo mirando el estado. \`useDebugValue\` te permite exponer información interna de forma legible solo cuando las herramientas de desarrollo están abiertas.

### Formateo diferido
Si el valor que quieres mostrar requiere un cálculo pesado (ej. parsear un objeto grande), puedes pasar una función de formateo como segundo argumento. React solo llamará a esta función si las DevTools están realmente abiertas para inspeccionar el componente.

### Cuándo NO usarlo
No es necesario para todos los hooks. Úsalo solo para hooks que forman parte de librerías compartidas o que tienen una lógica interna compleja donde una etiqueta de texto ayude significativamente a la depuración.
`;
