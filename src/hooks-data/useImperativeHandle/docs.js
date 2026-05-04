export const useImperativeHandleDocs = `
### ¿Qué es useImperativeHandle?
Es un hook que personaliza la instancia que se expone a los componentes padres cuando se usa \`ref\`.

### Por qué usarlo
Por defecto, si pasas una ref a un componente (usando \`forwardRef\`), el padre obtiene acceso a todo el nodo DOM del hijo. \`useImperativeHandle\` te permite restringir ese acceso y exponer solo un conjunto específico de métodos o propiedades (una "API limpia").

### Requisitos
1. El componente hijo debe estar envuelto en \`forwardRef\`.
2. El primer argumento de \`useImperativeHandle\` es la ref que recibe el componente.
3. El segundo argumento es una función que devuelve el objeto con los métodos que quieres exponer.

### Cuándo evitarlo
Como regla general, **evita el código imperativo usando refs** siempre que sea posible. La mayoría de las veces, deberías usar el flujo de datos "hacia abajo" (props) en lugar de llamar a métodos del hijo desde el padre.
`;
