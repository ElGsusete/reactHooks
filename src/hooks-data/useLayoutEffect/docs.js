export const useLayoutEffectDocs = `
### ¿Qué es useLayoutEffect?
Es una versión de \`useEffect\` que se dispara de forma **síncrona** inmediatamente después de que React haya realizado todos los cambios en el DOM, pero **antes** de que el navegador tenga oportunidad de pintar en pantalla.

### Cuándo usarlo
Su uso es muy específico:
- Cuando necesitas medir el tamaño o la posición de elementos del DOM para realizar cálculos que afecten a la UI.
- Cuando quieres evitar el "parpadeo" visual (flickering) que ocurriría si usaras \`useEffect\` (el cual se ejecuta después del pintado).

### Diferencia clave con useEffect
1. **useEffect**: Asíncrono. Render -> Pintado -> Efecto. (Recomendado para la mayoría de los casos).
2. **useLayoutEffect**: Síncrono. Render -> Efecto -> Pintado. (Bloquea el pintado hasta que el efecto termina).

### Advertencia
Úsalo con moderación, ya que al ser síncrono, si el código dentro del efecto es lento, puede degradar el rendimiento percibido de la aplicación.
`;
