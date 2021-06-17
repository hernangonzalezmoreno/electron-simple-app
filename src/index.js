const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Guardamos de manera global una instancia de la ventana principal
let mainWindow;

// Cuando la app este lista creamos la ventana
app.on( 'ready', () => {

  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(
    url.format({
      pathname: path.join( __dirname, 'views/index.html' ),
      protocol: 'file',
      slashes: true
    })
  );

});
