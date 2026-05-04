export const useActionStateCode = `import { useActionState } from 'react';

async function updateName(prevState, formData) {
  const name = formData.get('name');
  if (name === '') return 'El nombre no puede estar vacío';
  
  await saveToDb(name);
  return null; // Éxito
}

function ChangeName() {
  // [estado, acción, pendiente]
  const [error, submitAction, isPending] = useActionState(updateName, null);

  return (
    <form action={submitAction}>
      <input name="name" />
      <button type="submit" disabled={isPending}>Actualizar</button>
      {error && <p>{error}</p>}
    </form>
  );
}`;
