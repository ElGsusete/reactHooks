export const useRefDocs = `
### ¿Qué es useRef?
Es un hook que devuelve un objeto ref mutable cuya propiedad \`.current\` se inicializa con el argumento pasado. El objeto devuelto **persistirá durante toda la vida del componente**.

### Dos usos principales
1. **Acceso al DOM**: La forma principal de acceder a un elemento DOM directamente (para enfocar, medir, o usar librerías externas no-React).
2. **Variables de instancia**: Guardar cualquier valor mutable (como un ID de timer o el estado anterior de una prop) que necesites recordar entre renders pero que **no deba** disparar un nuevo renderizado cuando cambie.

### Diferencia con useState
- **useState**: Si cambias el valor, el componente se vuelve a renderizar.
- **useRef**: Si cambias \`ref.current\`, el componente **no** se renderiza.

### Reglas de Uso
- No leas ni escribas \`ref.current\` durante el renderizado (el cuerpo de la función del componente). Hazlo siempre dentro de \`useEffect\` o en manejadores de eventos.
`;
