export const useFetchDocs = `
### ¿Qué es useFetch?
Es un hook personalizado que encapsula la lógica de realizar peticiones HTTP, manejando automáticamente los estados de carga y errores.

### Ventajas de usarlo
1. **Reutilización**: Evitas repetir bloques idénticos de \`useEffect\`, \`fetch\`, y múltiples \`useState\` en cada componente que necesite datos.
2. **Legibilidad**: El componente se centra en mostrar los datos, no en cómo obtenerlos.
3. **Manejo de Ciclo de Vida**: Un buen \`useFetch\` maneja cancelaciones de peticiones (usando \`AbortController\`) para evitar errores si el componente se desmonta antes de recibir la respuesta.

### Implementación sugerida
Debe devolver un objeto con tres propiedades clave:
- \`data\`: Los datos recibidos de la API.
- \`loading\`: Un booleano para mostrar skeletons o spinners.
- \`error\`: Información sobre si algo salió mal.

### Alternativas profesionales
Para aplicaciones grandes, se recomienda usar librerías como **React Query** o **SWR**, que añaden caché, re-intentos automáticos y optimizaciones avanzadas que un simple custom hook no tiene.
`;
