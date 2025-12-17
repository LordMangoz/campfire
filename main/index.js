const {BrowserWindow, app} = require('electron');

console.log('Hello from Electron 👋');

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        show: false

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


