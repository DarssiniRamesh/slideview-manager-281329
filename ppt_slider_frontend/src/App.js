import React, { useState, useEffect } from 'react';
import './App.css';
import Architecture from './pages/Architecture';
import logo from './logo.svg';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [route, setRoute] = useState(window.location.pathname);

  // Basic hashless router using History API to avoid adding react-router
  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setRoute(path);
    }
  };

  const isArchitecture = route === '/architecture';

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: isArchitecture ? 'auto' : '100vh' }}>
        <nav className="navbar" aria-label="Primary">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <div style={{ position: 'absolute', left: 20, top: 20, display: 'flex', gap: 12 }}>
            <button
              onClick={() => navigate('/')}
              className="App-link"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 700 }}
              aria-label="Go to Home"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/architecture')}
              className="App-link"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 700 }}
              aria-label="Go to Architecture"
            >
              Architecture
            </button>
          </div>
        </nav>

        {!isArchitecture && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              Current theme: <strong>{theme}</strong>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </>
        )}
      </header>

      {isArchitecture && (
        <main style={{ paddingTop: 64, paddingBottom: 24 }}>
          <Architecture />
        </main>
      )}
    </div>
  );
}

export default App;
