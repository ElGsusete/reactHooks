import React, { useReducer } from 'react';
import { Plus, Trash2, CheckCircle, Circle, AlertCircle } from 'lucide-react';

const initialState = [
  { id: 1, text: 'Aprender useReducer', completed: false },
  { id: 2, text: 'Hacer el despliegue', completed: true },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

const UseReducerDemo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = React.useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div className="demo-container">
      <div className="demo-section">
        <h3>Todo List (State Complex)</h3>
        <p className="demo-desc">Gestión de una lista de tareas usando un reducer para manejar lógica compleja.</p>
        
        <form onSubmit={handleAdd} className="todo-input-group">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nueva tarea..."
            className="demo-input"
          />
          <button type="submit" className="demo-btn primary">
            <Plus size={18} />
          </button>
        </form>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="todo-check"
              >
                {todo.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
              </button>
              <span className="todo-text">{todo.text}</span>
              <button 
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                className="todo-delete"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
          {todos.length === 0 && (
            <div className="empty-state">
              <AlertCircle size={32} />
              <p>No hay tareas pendientes</p>
            </div>
          )}
        </ul>
      </div>

      <style jsx="true">{`
        .todo-input-group {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .todo-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .todo-item:hover {
          border-color: var(--accent-primary);
          transform: translateX(4px);
        }

        .todo-item.completed {
          opacity: 0.6;
        }

        .todo-item.completed .todo-text {
          text-decoration: line-through;
        }

        .todo-text {
          flex: 1;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .todo-check {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
        }

        .todo-delete {
          color: var(--text-tertiary);
          transition: color var(--transition-fast);
        }

        .todo-delete:hover {
          color: #ef4444;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 40px;
          color: var(--text-tertiary);
        }
      `}</style>
    </div>
  );
};

export default UseReducerDemo;
