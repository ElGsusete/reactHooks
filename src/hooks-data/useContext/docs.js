export const useContextDocs = `
### ¿Qué es useContext?
Es la forma de React de manejar el **estado global** o compartido. Permite que un componente se suscriba a cambios en un contexto sin tener que pasar props explícitamente a través de todos los niveles del árbol.

### El Problema: Prop Drilling
Cuando necesitas pasar un dato (ej. el tema o el usuario logueado) desde el componente raíz hasta un nieto muy lejano, terminas pasando esa prop por componentes intermedios que no la necesitan. Esto ensucia el código.

### La Solución: Context
1. **createContext**: Crea el objeto de contexto.
2. **Provider**: Envuelve el árbol de componentes y define el valor que quieres compartir.
3. **useContext**: Hook que usa el componente hijo para "engancharse" y leer ese valor.

### Cuándo usarlo
- Temas (Dark/Light mode).
- Datos del usuario autenticado.
- Configuraciones de idioma (i18n).
- Carrito de compras en e-commerce pequeños.

### Cuidado con el Rendimiento
Cada vez que el valor del Provider cambia, **todos** los componentes que usan ese contexto se vuelven a renderizar. Si el valor es un objeto grande que cambia a menudo, considera dividirlo en varios contextos más pequeños.
`;
