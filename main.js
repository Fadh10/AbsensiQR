const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        frame: false,
        resizable: false
    });
    mainWindow.loadURL(url.format({
        pathname: 'app/index.html',
        slashes: true
    }));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', boot);

