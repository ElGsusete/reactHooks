export const useDeferredValueDocs = `
### ¿Qué es useDeferredValue?
Es un hook que permite **diferir la actualización de una parte de la UI**. Recibe un valor y devuelve una nueva copia de ese valor que se actualizará con menor prioridad.

### Cómo funciona
1. Cuando el valor original cambia, React primero intenta renderizar el componente con el valor **antiguo** y el resto de la UI con el valor nuevo.
2. En segundo plano, React intenta renderizar con el valor **nuevo**.
3. Si el usuario vuelve a cambiar el valor antes de que termine, React abandona el trabajo pendiente y empieza con el valor más reciente.

### Diferencia con Debouncing
- **Debounce**: Espera un tiempo fijo (ej. 300ms) después de que el usuario deja de escribir antes de actuar.
- **useDeferredValue**: Es adaptativo. Si el ordenador es rápido, la actualización será casi instantánea. Si es lento, esperará lo necesario para no bloquear la UI.

### Cuándo usarlo
- Cuando tienes un valor que proviene de un input (que debe ser instantáneo) pero ese valor alimenta a un componente muy pesado que no puede renderizarse a 60fps.
- Evita tener que usar estados de carga (spinners) para actualizaciones pequeñas.

### Limitaciones
- El valor pasado debe ser un tipo primitivo (string, number, etc.) o un objeto creado fuera del renderizado para evitar bucles infinitos.
`;
