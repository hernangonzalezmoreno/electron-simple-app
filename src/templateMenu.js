var newProductWindow = require( './index' );
const NewProduct = require( './new-product' );

var ventana;

const templateMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Nuevo Producto",
        accelerator: "Ctrl+N",
        click(){

          // Consulto si hay una ventana abierta, en ese caso la cierro
          if( newProductWindow.window ){
            newProductWindow.cerrarVentana();
            newProductWindow = null;
          }
          // Luego creo la ventana nueva
          newProductWindow = new NewProduct();

          console.log( "Click en Nuevo Producto" );
        }
      }
    ]
  }
];

module.exports = templateMenu;
