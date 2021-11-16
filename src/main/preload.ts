import { contextBridge, ipcRenderer } from 'electron';

const ipc = {
  /**
   * open url at external website
   */
  'OPEN_EXTERNAL_URL': (payload: IPCOpenExternalURLProps) => {
    ipcRenderer.send('OPEN_EXTERNAL_URL', payload);
  },
};

contextBridge.exposeInMainWorld('ipc', ipc);

declare global {
  interface Window {
    ipc: typeof ipc;
  }
}
