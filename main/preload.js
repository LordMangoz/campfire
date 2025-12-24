const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('widgetsAPI', {
  save: (widgets) => ipcRenderer.send('save-widgets', widgets),
  load: () => ipcRenderer.invoke('load-widgets'),
});

contextBridge.exposeInMainWorld('tasksAPI', {
  save: (tasks) => ipcRenderer.send('save-tasks', tasks),
  load: () => ipcRenderer.invoke('load-tasks'),
});