import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { Smartphone, ZapOff } from 'lucide-react';

// Componente hijo que expone métodos personalizados
const CustomInput = forwardRef((props, ref) => {
  const [isShaking, setIsShaking] = useState(false);
  const internalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    // Solo exponemos estos métodos al padre
    shake: () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    },
    focus: () => {
      internalRef.current.focus();
    }
  }));

  return (
    <input 
      ref={internalRef}
      className={`demo-input ${isShaking ? 'shake-animation' : ''}`}
      placeholder="Hijo con métodos propios..."
    />
  );
});

const UseImperativeHandleDemo = () => {
  const customRef = useRef(null);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Control Imperativo del Hijo</h3>
        <p className="demo-desc">
          Permite que un componente hijo exponga métodos personalizados a su padre mediante una referencia.
        </p>

        <div className="card" style={{ maxWidth: '400px' }}>
          <div className="pane-content">
            <div className="phone-simulation">
              <Smartphone size={32} />
              <CustomInput ref={customRef} />
            </div>
            
            <div className="btn-group" style={{ marginTop: '20px' }}>
              <button onClick={() => customRef.current?.focus()} className="demo-btn outline">
                Enfocar Hijo
              </button>
              <button onClick={() => customRef.current?.shake()} className="demo-btn primary">
                ¡Agitar Hijo!
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .phone-simulation {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .shake-animation {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
          border-color: #ef4444 !important;
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default UseImperativeHandleDemo;
