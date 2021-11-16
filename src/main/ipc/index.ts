import { ipcMain, shell } from 'electron';

// open external url
ipcMain.on('OPEN_EXTERNAL_URL', (e, payload: IPCOpenExternalURLProps) => {
  shell.openExternal(payload.url);
});
