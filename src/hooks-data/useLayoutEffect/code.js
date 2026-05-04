export const useLayoutEffectCode = `import React, { useState, useLayoutEffect, useRef } from 'react';

function Tooltip() {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const ref = useRef(null);

  // Se ejecuta síncronamente antes de que el navegador pinte
  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []); // Se ejecuta solo una vez al montar

  return (
    <div>
      <div ref={ref} style={{ position: 'absolute', top: -tooltipHeight }}>
        Soy un tooltip dinámico
      </div>
      <button>Pasa el ratón</button>
    </div>
  );
}`;
