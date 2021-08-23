import { ipcMain, shell } from 'electron';

// open external url
ipcMain.on('window:ext-url', (e, payload: IIPCWindowExtURLProps) => {
  shell.openExternal(payload.url);
});
