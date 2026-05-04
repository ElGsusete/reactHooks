export const useStateDocs = `
### ¿Qué es useState?
Es el hook fundamental para manejar el **estado** en React. Permite que los componentes "recuerden" información entre renderizados.

### Cuándo usarlo
- Para valores que cambian con el tiempo (contadores, inputs, modales abiertos/cerrados).
- Para datos que, al cambiar, deben provocar que la UI se actualice.

### Reglas de Oro
1. **Inmutabilidad**: Nunca modifiques el estado directamente (ej. \`count = 5\`). Usa siempre la función setter (\`setCount(5)\`).
2. **Actualización funcional**: Si el nuevo estado depende del anterior, usa una función: \`setCount(prev => prev + 1)\`. Esto evita errores en actualizaciones rápidas o asíncronas.
3. **Objetos y Arrays**: Cuando el estado es un objeto o array, debes crear una copia nueva: \`setItems([...prevItems, newItem])\`.

### Consideraciones de Rendimiento
- Si el valor inicial requiere un cálculo costoso, puedes pasar una función inicializadora: \`useState(() => heavyCalculation())\`. Solo se ejecutará una vez.
`;
