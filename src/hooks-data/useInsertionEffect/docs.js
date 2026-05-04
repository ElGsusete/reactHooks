export const useInsertionEffectDocs = `
### ¿Qué es useInsertionEffect?
Es un hook introducido en React 18, diseñado específicamente para autores de librerías de **CSS-in-JS** (como Styled Components o Emotion).

### Cuándo usarlo
- Solo si estás construyendo una librería de CSS-in-JS.
- Para inyectar etiquetas \`<style>\` o \`<svg>\` de definiciones de forma dinámica en el DOM antes de que se ejecuten otros hooks de efecto o layout.

### ¿Por qué no usar useEffect o useLayoutEffect para esto?
1. Si inyectas estilos en \`useEffect\`, el navegador ya habrá pintado una vez, provocando un parpadeo visual.
2. Si los inyectas en \`useLayoutEffect\`, el navegador tendrá que recalcular el layout justo cuando está intentando leerlo, lo cual es ineficiente.
\`useInsertionEffect\` ocurre **antes** de que el navegador calcule los estilos y el layout, asegurando el máximo rendimiento.

### Limitaciones
- No tiene acceso a \`refs\`.
- No puede programar actualizaciones de estado.
`;
