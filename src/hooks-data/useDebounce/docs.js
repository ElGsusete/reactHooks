export const useDebounceDocs = `
### ¿Qué es useDebounce?
Es un hook que retrasa la actualización de un valor hasta que ha pasado un periodo de tiempo determinado sin que el valor original cambie.

### Por qué usarlo
Es fundamental para optimizar el rendimiento y reducir el número de peticiones a servidores:
1. **Peticiones API**: Si tienes un buscador, no quieres disparar una petición por cada letra que escribe el usuario. Con \`useDebounce\`, solo disparas la petición cuando el usuario termina de escribir.
2. **Cálculos pesados**: Evita que cálculos costosos se ejecuten con demasiada frecuencia durante eventos rápidos como el scroll o el redimensionamiento de ventana.

### Cómo funciona
Utiliza un \`setTimeout\` dentro de un \`useEffect\`. La parte mágica es la **función de limpieza** del efecto: si el valor cambia antes de que expire el tiempo, el temporizador anterior se cancela y se crea uno nuevo.

### Ejemplo de uso real
Un buscador de productos donde esperas 500ms tras la última pulsación de tecla antes de llamar a la base de datos.
`;
