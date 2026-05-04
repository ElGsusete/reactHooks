export const useFormStatusDocs = `
### ¿Qué es useFormStatus()?
Es un hook de **React 19** que proporciona información sobre el último envío del formulario en el que se encuentra el componente.

### Valores que devuelve
- **pending**: Un booleano que indica si el formulario se está enviando actualmente.
- **data**: Un objeto \`FormData\` que contiene los datos que se están enviando.
- **method**: El método HTTP usado (post, get).
- **action**: Una referencia a la función pasada al atributo \`action\` del form.

### Regla fundamental
Para que este hook funcione, el componente que lo llama **debe estar renderizado dentro de un \`<form>\`**. No puedes llamarlo en el mismo componente que define el \`<form>\`, sino en uno de sus hijos.

### Por qué es útil
Antes de React 19, para mostrar un estado de carga en un botón de submit, tenías que gestionar un estado manual (\`isLoading\`) y actualizarlo antes y después de la petición. Ahora, el botón "sabe" por sí mismo si su padre se está enviando.
`;
