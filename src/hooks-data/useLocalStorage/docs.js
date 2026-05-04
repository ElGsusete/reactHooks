export const useLocalStorageDocs = `
### ¿Qué es useLocalStorage?
Es un hook personalizado muy popular que abstrae la lógica de leer y escribir en el almacenamiento local del navegador, manteniendo los datos sincronizados con el estado de React.

### Por qué usarlo
1. **Persistencia**: Los datos sobreviven a las recargas de página y cierres de navegador.
2. **Abstracción**: No tienes que lidiar con \`JSON.parse\` o \`JSON.stringify\` manualmente cada vez.
3. **Reactividad**: Al estar conectado al estado de React, cualquier cambio en localStorage se refleja inmediatamente en la UI.

### Implementación común
Suele usar una "lazy initializer" en \`useState\` (pasando una función en lugar de un valor) para leer del disco solo una vez durante el montaje inicial, optimizando el rendimiento.

### Consideraciones
- localStorage solo admite strings, por lo que siempre hay que serializar/deserializar objetos.
- El tamaño está limitado (normalmente ~5MB).
- No es apto para datos sensibles (contraseñas, tokens sin cifrar).
`;
