import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HookViewer from './components/HookViewer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/hook/:hookId" element={<HookViewer />} />
            <Route path="/" element={<Navigate to="/hook/useState" replace />} />
          </Routes>
        </main>
      </div>

      <style jsx="true">{`
        .app-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
        
        .main-content {
          flex: 1;
          height: 100%;
          overflow-y: auto;
          background-color: var(--bg-primary);
          transition: background-color var(--transition-normal);
        }
      `}</style>
    </Router>
  );
}

export default App;
