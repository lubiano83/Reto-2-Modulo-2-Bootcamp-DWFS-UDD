/* Ejercicio 2 */

const productosIniciales = [
    { nombre: "cuaderno", precio: 200, cantidad: 20 },
    { nombre: "carpeta", precio: 250, cantidad: 10 }
];

const tienda = [...productosIniciales];

function manejoTienda(productosIniciales) {
    Array.isArray(productosIniciales) ? productosIniciales : [productosIniciales];

    const agregarProducto = ( nombre, precio, cantidad ) => {
        try {
            const producto = { nombre, precio, cantidad };
            if( !nombre || !precio || !cantidad ) return console.log("Todos los campos son necesarios");
            if( typeof nombre !== "string" || typeof precio !== "number" || typeof cantidad !== "number" ) return console.log("El campo nombre debe ser tipo string y precio como cantidad deben ser tipo number");
            tienda.push(producto);
        } catch (error) {
            console.log(error.message);
        }
    };

    const eliminarProductos = ( nombre ) => {
        try {
            const productoEncontrado = tienda.findIndex(producto => producto.nombre === nombre);
            if( productoEncontrado <= -1 ) return console.log("Ese producto no existe..");
            tienda.splice(productoEncontrado, 1);
        } catch (error) {
            console.log(error.message);
        }
    };

    const valorTotal = () => {
        try {
            const precioTotal = tienda.reduce((acc, item) => {
                return acc + item.cantidad * item.precio
            }, 0);
            return console.log("Valor Total:", precioTotal);
        } catch (error) {
            console.log(error.message);
        }
    };

    const mostrarProductos = () => {
        console.log("Tienda:", tienda);
    };
    
    agregarProducto("lapiz", 100, 10);
    agregarProducto("plumon", 300, 10);
    agregarProducto("goma", 200, 20 );
    eliminarProductos("plumon");
    valorTotal();
    mostrarProductos();
};

manejoTienda();
