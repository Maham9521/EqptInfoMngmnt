const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    console.log('Creating window...');
    mainWindow = new BrowserWindow({
        width: 900,
        height: 800,
        icon: path.join(__dirname, 'src/assets/icons/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed', () => {
        console.log('Window closed');
        mainWindow = null;
    });

    mainWindow.webContents.openDevTools(); // Open DevTools for debugging
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
    console.log('App is ready');
    createWindow();

    console.log('Registered IPC handlers:');
    ipcMain.eventNames().forEach(name => {
        console.log(`- ${name}`);
    });
});

app.on('window-all-closed', () => {
    console.log('All windows closed');
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    console.log('App activated');
    if (mainWindow === null) {
        createWindow();
    }
});
