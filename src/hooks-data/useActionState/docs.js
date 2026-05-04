export const useActionStateDocs = `
### ¿Qué es useActionState()?
Es un nuevo hook de **React 19** (anteriormente llamado \`useFormState\` en las versiones beta) que permite gestionar el estado de una acción de formulario.

### Cómo funciona
Recibe una **función de acción** y un **estado inicial**. Devuelve un array con:
1. El **estado actual** devuelto por la acción.
2. Una **nueva acción** que puedes pasar al atributo \`action\` de un \`<form>\`.
3. Un booleano **isPending** que indica si la acción se está ejecutando.

### Por qué usarlo en lugar de useState
1. **Acceso al estado anterior**: La función de acción recibe \`prevState\` como primer argumento, lo que facilita actualizaciones incrementales.
2. **Estado de carga integrado**: Te da \`isPending\` automáticamente, sin tener que crear un estado separado.
3. **Mejor integración con Server Actions**: Está diseñado para funcionar perfectamente con la lógica de servidor de React.

### Caso de uso típico
Manejar errores de validación que vienen del servidor (ej. "Este email ya está en uso") y mostrarlos en el formulario sin perder los datos que el usuario ya escribió.
`;
