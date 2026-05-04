export const useEffectDocs = `
### ¿Qué es useEffect?
Es el hook que permite ejecutar efectos secundarios en componentes funcionales (peticiones API, suscripciones, timers, manipulación manual del DOM).

### El Array de Dependencias \`[]\`
Controla cuándo debe volver a ejecutarse el efecto:
- **Sin array**: Se ejecuta después de **cada** renderizado.
- **Array vacío \`[]\`**: Se ejecuta solo **una vez**, después del primer renderizado (similar a \`componentDidMount\`).
- **Con variables \`[prop, state]\`**: Se ejecuta **solo si** alguno de esos valores ha cambiado desde el último renderizado.

### La Función de Limpieza (Cleanup)
Si tu efecto devuelve una función, React la ejecutará:
1. Justo antes de que el componente se desmonte.
2. Antes de volver a ejecutar el efecto (si hay un cambio en las dependencias).
Es vital para evitar fugas de memoria y comportamientos inesperados en suscripciones o timers.

### Reglas de Oro
- No pongas lógica de cálculo puro dentro de un efecto si puede hacerse durante el renderizado.
- Si usas una variable dentro del efecto, **debe** estar en el array de dependencias (regla de linting de React).
`;
