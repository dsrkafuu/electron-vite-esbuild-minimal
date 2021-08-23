import React, { useState, memo } from 'react';
import { Button, Typography } from 'antd';
import LinkExt from './components/LinkExt';
import './App.css';
import logo from './assets/logo.svg';

const App = memo(() => {
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
          <LinkExt
            className='app-link'
            href='https://www.electronjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Electron
          </LinkExt>
          {' | '}
          <LinkExt
            className='app-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </LinkExt>
          {' | '}
          <LinkExt
            className='app-link'
            href='https://vitejs.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite
          </LinkExt>
        </p>
      </Typography>
    </div>
  );
});

App.displayName = 'RootApp';

export default App;
