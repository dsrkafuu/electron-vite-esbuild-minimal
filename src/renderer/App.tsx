import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import ExternalLink from './components/ExternalLink';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Typography className='app-intro'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <Button type='primary' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>app.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <ExternalLink
            className='app-link'
            href='https://www.electronjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Electron
          </ExternalLink>
          {' | '}
          <ExternalLink
            className='app-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </ExternalLink>
          {' | '}
          <ExternalLink
            className='app-link'
            href='https://vitejs.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite
          </ExternalLink>
        </p>
      </Typography>
    </div>
  );
}

export default App;
