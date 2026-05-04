export const useFormStatusCode = `import { useFormStatus } from 'react-dom';

function SubmitButton() {
  // Obtiene el estado del formulario padre
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  );
}

function Form() {
  async function action(formData) {
    await submitData(formData);
  }

  return (
    <form action={action}>
      <input name="name" />
      <SubmitButton />
    </form>
  );
}`;
