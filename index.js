/* Reto 2 - Modulo 2 */

let catalogo = [];

const agregarProducto = ( nombre, precio ) => {
    try {
        const producto = { nombre, precio };
        if(!nombre || !precio) return console.log("Todos los campos son necesarios");
        if(typeof nombre !== "string" || typeof precio !== "number") return console.log("El nombre debe ser de tipo string y el precio de tipo number");
        catalogo.push(producto);
    } catch (error) {
        console.log(error.message);
    }
};

const eliminarProducto = ( nombre ) => {
    try {
        const productoEliminado = catalogo.filter(item => item.nombre === nombre);
        if(productoEliminado.length === 0) return console.log(`El producto con nombre: ${nombre}, no existe..`);
        catalogo = catalogo.filter( item => item.nombre !== nombre);
        console.log("producto eliminado:", productoEliminado);
    } catch (error) {
        console.log(error.message);
    }
};

const buscarProductoFuncionAnonima = function( nombre ) {
    try {
        const index = catalogo.findIndex( item => item.nombre === nombre);
        if(index.length <= -1) return console.log(`El producto con nombre: ${nombre}, no existe..`);
        const productoFiltrado = catalogo.filter( item => item.nombre === nombre);
        console.log("buscar funcion anonima:", productoFiltrado);
    } catch (error) {
        console.log(error.message);
    }
};

const buscarProductoFuncionFlecha = ( nombre ) => {
    try {
        const index = catalogo.findIndex( item => item.nombre === nombre);
        if(index.length <= -1) return console.log(`El producto con nombre: ${nombre}, no existe..`);
        const productoFiltrado = catalogo.filter( item => item.nombre === nombre);
        console.log("buscar funcion flecha:", productoFiltrado);
    } catch (error) {
        console.log(error.message);
    }
};

const mostrarProductos = () => {
    try {
        console.log("catalogo:", catalogo);
    } catch (error) {
        console.log(error.message);
    }
};

agregarProducto("zapatos", 100);
agregarProducto("polera", 50);
agregarProducto("pantalones", 125)
agregarProducto("chaqueta", 150)
eliminarProducto("zapatos");
buscarProductoFuncionAnonima("chaqueta");
buscarProductoFuncionFlecha("polera");
mostrarProductos();
