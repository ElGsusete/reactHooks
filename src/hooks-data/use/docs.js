export const useDocs = `
### ¿Qué es use()?
Es un nuevo hook de **React 19** que permite leer el valor de un recurso como una **Promesa** o un **Contexto**. 

### Diferencia clave con otros hooks
A diferencia de todos los demás hooks de React, \`use()\` puede llamarse dentro de **bucles** y sentencias condicionales como \`if\`. 

### Uso con Promesas
Cuando se usa con una promesa, se integra con **Suspense**. Si la promesa no se ha resuelto, el componente se "suspende" y muestra el fallback del Suspense más cercano.

### Uso con Contexto
Funciona de forma similar a \`useContext\`, pero al ser condicional, puedes usarlo para leer un contexto solo si se cumple cierta condición, algo que antes era imposible.

### Reglas
- Debe llamarse durante el renderizado.
- Aunque es flexible, se recomienda seguir tratándolo con cuidado dentro de condicionales para mantener el código legible.
`;
