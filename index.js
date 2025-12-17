const {BrowserWindow, app} = require('electron');

console.log('Hello from Electron 👋');

const createWindow = () => {
    const window = new BrowserWindow({
        width:800,
        height:600
    })
}

app.whenReady().then(() => {
    createWindow();
});