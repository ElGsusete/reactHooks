export const useReducerDocs = `
### ¿Qué es useReducer?
Es una alternativa a \`useState\` para manejar lógica de estado compleja. Se basa en el patrón de Redux (Action -> Reducer -> New State).

### Cuándo usarlo sobre useState
- Cuando tienes un estado con múltiples valores que dependen entre sí.
- Cuando la lógica del próximo estado depende del anterior de forma compleja.
- Cuando quieres separar la lógica de negocio (el reducer) de la UI (el componente).

### Conceptos Clave
1. **Reducer**: Una función que recibe el estado actual y una acción, y devuelve el nuevo estado. **Debe ser una función pura**.
2. **Action**: Un objeto que describe qué queremos hacer (normalmente tiene un \`type\` y opcionalmente un \`payload\`).
3. **Dispatch**: La función que usamos para enviar acciones al reducer.

### Ventajas
- **Testabilidad**: Al ser una función pura, el reducer es muy fácil de testear.
- **Predecibilidad**: Todo cambio de estado está centralizado en un solo lugar.
`;
