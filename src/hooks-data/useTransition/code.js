export const useTransitionCode = `import React, { useState, useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    // Marcamos la actualización como una transición
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <TabButton onClick={() => selectTab('about')}>Sobre mí</TabButton>
      <TabButton onClick={() => selectTab('posts')}>Posts (Lento)</TabButton>
      <TabButton onClick={() => selectTab('contact')}>Contacto</TabButton>
      
      <hr />
      {isPending && <p>Cargando pestaña...</p>}
      
      {tab === 'about' && <About />}
      {tab === 'posts' && <Posts />}
      {tab === 'contact' && <Contact />}
    </div>
  );
}`;
