import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Moon, Sun, ChevronRight, Zap } from 'lucide-react';
import { hookCategories } from '../hooks-data';

const Sidebar = ({ theme, toggleTheme }) => {
  const [search, setSearch] = useState('');

  const filteredCategories = hookCategories.map(cat => ({
    ...cat,
    hooks: cat.hooks.filter(hook => 
      hook.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.hooks.length > 0);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <Zap size={24} className="accent-text" fill="currentColor" />
          <span>Hooks Explorer</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} title="Cambiar tema">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar hook..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <nav className="sidebar-nav">
        {filteredCategories.map(category => (
          <div key={category.id} className="nav-group">
            <h3 className="group-title">{category.title}</h3>
            <ul className="hook-list">
              {category.hooks.map(hook => (
                <li key={hook}>
                  <NavLink 
                    to={`/hook/${hook}`}
                    className={({ isActive }) => `hook-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{hook}</span>
                    <ChevronRight size={14} className="arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <style jsx="true">{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100%;
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }

        .sidebar-header {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .accent-text {
          color: var(--accent-primary);
        }

        .theme-toggle {
          padding: 8px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          transition: background-color var(--transition-fast);
        }

        .theme-toggle:hover {
          background-color: var(--bg-tertiary);
          color: var(--accent-primary);
        }

        .search-container {
          margin: 0 16px 16px;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .search-container input {
          width: 100%;
          padding: 10px 12px 10px 40px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: border-color var(--transition-fast);
        }

        .search-container input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 0 16px 24px;
        }

        .nav-group {
          margin-bottom: 24px;
        }

        .group-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 8px;
          padding-left: 12px;
        }

        .hook-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hook-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .hook-link:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .hook-link.active {
          background-color: var(--accent-glow);
          color: var(--accent-primary);
        }

        .hook-link .arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: all var(--transition-fast);
        }

        .hook-link:hover .arrow, .hook-link.active .arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
