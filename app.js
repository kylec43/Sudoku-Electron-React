const isDev = require('electron-is-dev');
const Constants = require('./Constants');
const electron = require('electron');
const { app, BrowserWindow } = electron;

let window;
app.on("ready", () => {

    window = new BrowserWindow({
        title: "Sudoku",
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadURL(
        isDev
        ? Constants.Path.DEV_INDEX_PATH
        : Constants.Path.PRODUCTION_INDEX_PATH
    )

    window.show();
});



app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});


