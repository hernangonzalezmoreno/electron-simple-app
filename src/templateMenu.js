const templateMenu = [
  {
    label: "Archivo",
    submenu: [
      {
        label: "Nuevo Producto",
        accelerator: "Ctrl+N",
        click(){
          console.log( "Click en Nuevo Producto" );
        }
      }
    ]
  }
];

module.exports = templateMenu;
