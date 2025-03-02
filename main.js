// main.js - Configuração do Electron
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
