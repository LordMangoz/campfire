const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

console.log('Hello from Electron 👋');

const filePath = path.join(app.getPath('userData'), 'widgets.json');

ipcMain.handle('save-widgets', (_, widgets) => {
  fs.writeFileSync(filePath, JSON.stringify(widgets, null, 2));
  return true;
});

ipcMain.handle('load-widgets', () => {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
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


