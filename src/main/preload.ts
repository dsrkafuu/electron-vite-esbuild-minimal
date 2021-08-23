import { contextBridge, ipcRenderer } from 'electron';

const ipc = {
  /**
   * open url at external website
   */
  'window:ext-url': (payload: IIPCWindowExtURLProps) => {
    ipcRenderer.send('window:ext-url', payload);
  },
};

contextBridge.exposeInMainWorld('ipc', ipc);

declare global {
  interface Window {
    ipc: typeof ipc;
  }
}
