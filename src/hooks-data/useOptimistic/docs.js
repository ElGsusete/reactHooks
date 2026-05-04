export const useOptimisticDocs = `
### ¿Qué es useOptimistic()?
Es un hook de **React 19** que permite mostrar un estado diferente mientras una acción asíncrona (como una petición al servidor) está en curso.

### Por qué usarlo
Mejora drásticamente la experiencia de usuario (UX) al dar feedback inmediato. En lugar de mostrar un spinner y esperar a que el servidor confirme, asumes que la operación tendrá éxito y actualizas la UI al instante. Si la operación falla, React revierte automáticamente al estado real.

### Cómo funciona
1. Recibe el **estado base** (los datos reales del servidor).
2. Recibe una **función reductora** que define cómo se mezcla el estado real con el nuevo dato "optimista".
3. Devuelve el estado optimista y una función para disparar el cambio.

### Caso de uso ideal
- Mensajería (chats).
- Dar "Like" o marcar como favorito.
- Cambiar el orden de una lista (drag and drop).
- Borrar elementos de una tabla.
`;
