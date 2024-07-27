import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  login: (credentials: { username: string; password: string }) => 
    ipcRenderer.invoke('login', credentials)
});