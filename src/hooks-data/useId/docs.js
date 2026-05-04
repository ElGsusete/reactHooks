export const useIdDocs = `
### ¿Qué es useId?
Es un hook para generar identificadores únicos que pueden ser pasados a atributos de accesibilidad.

### Por qué no usar Math.random()
1. **SSR (Server Side Rendering)**: \`Math.random()\` generará un ID diferente en el servidor y en el cliente, causando errores de hidratación. \`useId\` garantiza que el ID sea el mismo en ambos lados.
2. **Estabilidad**: El ID permanece constante mientras el componente esté montado.

### Casos de uso
- Asociar un \`<label>\` con un \`<input>\` mediante \`htmlFor\` e \`id\`.
- Atributos \`aria-describedby\`, \`aria-labelledby\`, etc.
- Generar prefijos para sub-elementos dentro de un componente complejo.

### Qué NO es useId
- No debe usarse para generar las \`keys\` de una lista. Las keys deben provenir de tus datos.
`;
