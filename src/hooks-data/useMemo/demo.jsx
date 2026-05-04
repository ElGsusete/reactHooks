import React, { useState, useMemo } from 'react';
import { Calculator, Zap, AlertTriangle } from 'lucide-react';

const expensiveCalculation = (num) => {
  console.log('Calculando...');
  let i = 0;
  while (i < 1000000000) i++; // Bucle pesado
  return num * num;
};

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // useMemo memoriza el resultado del cálculo
  // Solo se vuelve a ejecutar si "number" cambia
  const squaredNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Cálculos Pesados</h3>
        <p className="demo-desc">
          Evita que cálculos costosos se ejecuten en cada renderizado si sus entradas no han cambiado.
        </p>

        <div className="memo-grid">
          <div className="card memo-card">
            <div className="pane-header">Cálculo Memorizado</div>
            <div className="pane-content">
              <div className="memo-value">
                <Calculator size={24} />
                <span>{number}² = {squaredNumber}</span>
              </div>
              <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                className="demo-input"
              />
              <p className="hint">Cambiar este número dispara el cálculo lento.</p>
            </div>
          </div>

          <div className="card memo-card">
            <div className="pane-header">Estado Independiente</div>
            <div className="pane-content">
              <div className="memo-value">
                <Zap size={24} />
                <span>Contador: {count}</span>
              </div>
              <button onClick={() => setCount(c => c + 1)} className="demo-btn primary full-width">
                Incrementar sin lag
              </button>
              <p className="hint">Este botón no dispara el cálculo lento gracias a useMemo.</p>
            </div>
          </div>
        </div>

        <div className="info-note">
          <AlertTriangle size={18} />
          <p>Mira la consola: el mensaje "Calculando..." solo aparece cuando cambias el número de la izquierda.</p>
        </div>
      </div>

      <style jsx="true">{`
        .memo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .memo-value {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--accent-primary);
        }

        .hint {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-top: 12px;
        }

        .full-width {
          width: 100%;
        }

        @media (max-width: 600px) {
          .memo-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default UseMemoDemo;
