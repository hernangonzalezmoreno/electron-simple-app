const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');
const templateMenu = require( './templateMenu.js' );

// Modulo que recarga la app cuando hay cambios durante el desarrollo
if( process.env.NODE_ENV !== 'production' ){
  require( 'electron-reload' )( __dirname, {} );
}

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

  const mainMenu = Menu.buildFromTemplate( templateMenu );
  Menu.setApplicationMenu( mainMenu );

});
