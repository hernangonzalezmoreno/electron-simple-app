const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');
const templateMenu = require( './templateMenu.js' );

// Modulo que recarga la app cuando hay cambios durante el desarrollo
if( process.env.NODE_ENV !== 'production' ){
  require( 'electron-reload' )( __dirname, {
    // Con lo siguiente, relanzamos la app cuando hay cambios propios de Electron
    electron: path.join( __dirname, '../node_modules', '.bin', 'electron' )
  });
}

// Guardamos de manera global una instancia de la ventana principal y de las secundarias
var mainWindow;
var newProductWindow = 1;

// Cuando la app este lista creamos la ventana
app.on( 'ready', () => {

  mainWindow = new BrowserWindow({
    title: "Electron Simple App"
  });

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

module.exports = newProductWindow;
