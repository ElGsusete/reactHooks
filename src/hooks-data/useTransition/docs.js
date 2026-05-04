export const useTransitionDocs = `
### ¿Qué es useTransition?
Es un hook que permite marcar actualizaciones de estado como **transiciones de baja prioridad**. Esto permite que React mantenga la interfaz de usuario responsiva incluso durante actualizaciones pesadas.

### Cómo funciona
Devuelve un array con dos elementos:
1. **isPending**: Un booleano que indica si la transición se está procesando actualmente.
2. **startTransition**: Una función para envolver la actualización de estado que queremos diferir.

### Caso de uso principal
Cuando tienes una acción que provoca un cambio grande en la UI (ej. filtrar una lista de miles de elementos o cambiar a una pestaña muy compleja) y no quieres que el navegador se "congele" mientras React renderiza esos cambios.

### Beneficios
- **UI No bloqueante**: El usuario puede seguir haciendo scroll o escribiendo en inputs mientras la transición se procesa en segundo plano.
- **Interrupción**: Si el usuario cambia de opinión (ej. pulsa otra pestaña antes de que termine la anterior), React abandonará la transición obsoleta y se centrará en la nueva.

### Limitaciones
- Solo debe usarse para actualizaciones de estado. No para peticiones de red (usa \`use\` o \`Suspense\` para eso).
- No funciona con estados que se actualizan de forma síncrona fuera de React.
`;
