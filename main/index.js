const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

console.log('Hello from Electron 👋');

const filePathWid = path.join(app.getPath('userData'), 'widgets.json');
const filePathTasks = path.join(app.getPath('userData'), 'tasks.json');

ipcMain.on('save-widgets', (_, widgets) => {
  fs.writeFileSync(filePathWid, JSON.stringify(widgets, null, 2));
});

ipcMain.handle('load-widgets', async () => {
  if (fs.existsSync(filePathWid)) {
    const data = fs.readFileSync(filePathWid , 'utf8');
    return JSON.parse(data);
  }
  return []; // return empty array if no save exists
});

//task handlers
ipcMain.on('save-tasks', (_, tasks) => {
  fs.writeFileSync(filePathTasks, JSON.stringify(tasks, null, 2));
});

ipcMain.handle('load-tasks', async () => {
  if (fs.existsSync(filePathTasks)) {
    const data = fs.readFileSync(filePathTasks , 'utf8');
    return JSON.parse(data);
  }   
  return []; // return empty array if no save exists
});
const createWindow = () => {
    const win = new BrowserWindow({
       webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        },
        width:800,
        height:600,
        show: false,
       

    })
    
    win.loadURL('http://localhost:5173');

    win.once('ready-to-show', () => {
       win.show()
       win.webContents.openDevTools()
     })
    
     win.webContents.on('did-fail-load', (_e, code, desc) => {
       console.error('LOAD FAILED:', code, desc)
     })
}

app.whenReady().then(createWindow);


