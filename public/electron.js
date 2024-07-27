const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
      height: 800,
        icon: path.join(__dirname, 'src/assets/icons/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadURL('http://localhost:3000');
}

// Your existing IPC handlers
ipcMain.handle('login', async (event, credentials) => {
    const { username, password } = credentials;
    if (username === 'test' && password === 'password') {
        return { success: true };
    } else {
        return { success: false, error: 'Invalid username or password' };
    }
});

// Log all registered IPC handlers
app.whenReady().then(() => {
  mainWindow.webContents.openDevTools();
    console.log('Registered IPC handlers:');
    ipcMain.eventNames().forEach(name => {
        console.log(`- ${name}`);
    });

    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
