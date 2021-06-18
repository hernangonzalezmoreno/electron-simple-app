const { BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

// Definimos la clase y la exportamos para poder utilizarla afuera
module.exports = class NewProduct{

  constructor(){

    // En Node, cualquier propiedad que se quiera agregar a la clase
    // se puede declarar en el contructor con: this.yElNombre;
    // y asignar, porsupuesto: this.yElNombre = 3;

    // Creamos la propiedad window de tipo BrowserWindow
    this.window = new BrowserWindow({
      width: 400,
      height: 330,
      title: "Agregar un Nuevo Producto"
    });

    // Le quitamos la barra de la aplicacion a esta ventana
    this.window.setMenu( null );

    // Asignamos una vista a esta ventana
    this.window.loadURL( url.format({
      pathname: path.join( __dirname, 'views/new-product.html' ),
      protocol: 'file',
      slashes: true
    }));

    // Evento al cerrar la ventana
    this.window.on( 'closed', () => {
      // Asignamos undefined a window para saber que la ventana esta cerrada
      this.window = undefined;
    });

  }

  cerrarVentana(){
    // Disparamos el evento de cerrar la ventana
    this.window.close();
  }

}
