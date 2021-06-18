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

          // Solo creo la ventana si newProductWindow esta vacio, o no contiene la propiedad window, o la propiedad esta vacia
          if( !newProductWindow || !('window' in newProductWindow) || !newProductWindow.window )
            newProductWindow = new NewProduct();

          console.log( "Click en Nuevo Producto" );

        }
      }
    ]
  }
];

module.exports = templateMenu;
