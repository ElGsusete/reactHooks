export const useSyncExternalStoreDocs = `
### ¿Qué es useSyncExternalStore?
Es un hook introducido en React 18 que permite a los componentes suscribirse a una fuente de datos externa (fuera de React) de forma segura y consistente.

### Por qué no usar useEffect + useState
En React 18 (con renderizado concurrente), si usas \`useEffect\` para suscribirte a algo externo, es posible que diferentes partes de la UI lean valores distintos durante un mismo ciclo de renderizado (un fenómeno llamado **"tearing"**). \`useSyncExternalStore\` garantiza que la UI siempre esté sincronizada con la fuente, bloqueando el renderizado si la fuente cambia en mitad del proceso.

### Argumentos
1. **subscribe**: Función que registra un callback que React llamará cada vez que la fuente cambie. Debe devolver una función para des-suscribirse.
2. **getSnapshot**: Función que devuelve el valor actual de la fuente.
3. **getServerSnapshot** (opcional): Función que devuelve el valor inicial usado durante el SSR.

### Cuándo usarlo
- Integración con librerías de gestión de estado externas (Zustand, Redux, etc.).
- Suscripción a APIs del navegador que cambian con el tiempo (tamaño de ventana, estado de red, scroll, etc.).
`;
