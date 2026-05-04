import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

const UseStateDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>1. Contador Simple</h3>
        <p className="demo-desc">Uso básico para manejar valores numéricos.</p>
        <div className="counter-box">
          <span className="count-display">{count}</span>
          <div className="btn-group">
            <button onClick={() => setCount(c => c - 1)} className="demo-btn secondary">
              <Minus size={18} />
            </button>
            <button onClick={() => setCount(0)} className="demo-btn outline">
              <RotateCcw size={18} />
            </button>
            <button onClick={() => setCount(c => c + 1)} className="demo-btn primary">
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3>2. Input Controlado</h3>
        <p className="demo-desc">Sincronización del estado con elementos de formulario.</p>
        <div className="input-box">
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe algo..."
            className="demo-input"
          />
          <div className="live-preview">
            <strong>Valor en tiempo real:</strong> {text || <span className="empty">Vacio</span>}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .demo-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .demo-section h3 {
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .demo-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .counter-box {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px;
          background-color: var(--bg-primary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .count-display {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: var(--font-mono);
          min-width: 60px;
          text-align: center;
        }

        .btn-group {
          display: flex;
          gap: 12px;
        }

        .demo-btn {
          padding: 10px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .demo-btn.primary {
          background-color: var(--accent-primary);
          color: white;
        }

        .demo-btn.secondary {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .demo-btn.outline {
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .demo-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .input-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .demo-input {
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          width: 100%;
          max-width: 400px;
        }

        .live-preview {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .empty {
          color: var(--text-tertiary);
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default UseStateDemo;
