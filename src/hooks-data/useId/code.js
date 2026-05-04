export const useIdCode = `import React, { useId } from 'react';

function PasswordField() {
  // Genera un ID único para asociar el label con el input
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        La contraseña debe tener al menos 8 caracteres.
      </p>
    </>
  );
}`;
