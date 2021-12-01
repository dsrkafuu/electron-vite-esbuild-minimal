import path from 'path';
import url from 'url';
import { app, BrowserWindow } from 'electron';
import { isDevelopment } from './utils/env';
import './ipc';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    show: false, // do not show if vite app not ready
    webPreferences: {
      preload: path.resolve(__dirname, './preload.js'),
    },
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (isDevelopment()) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.toggleDevTools();
  } else {
    const index = url
      .pathToFileURL(path.resolve(__dirname, '../renderer/index.html'))
      .toString();
    mainWindow.loadURL(index);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
