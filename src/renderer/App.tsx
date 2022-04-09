import { useState } from 'react';
import ExternalLink from './components/ExternalLink';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <img src={logo} className='app-logo' alt='logo' />
      <p>Hello Vite + React!</p>
      <p>
        <button
          className='app-btn'
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>app.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <ExternalLink className='app-link' href='https://www.electronjs.org'>
          Electron
        </ExternalLink>
        {' | '}
        <ExternalLink className='app-link' href='https://reactjs.org'>
          React
        </ExternalLink>
        {' | '}
        <ExternalLink className='app-link' href='https://vitejs.dev'>
          Vite
        </ExternalLink>
      </p>
    </div>
  );
}

export default App;
