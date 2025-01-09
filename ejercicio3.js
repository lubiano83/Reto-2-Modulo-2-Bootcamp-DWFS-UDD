/* Ejercicio 3 */

let contactos = [];

function agregarContacto( nombre, email, telefono ) {
    try {
        if(!nombre || !email || !telefono) return console.log("Todos los campos son requeridos");
        if(typeof nombre !== "string" || typeof email !== "string" || typeof telefono !== "string") return console.log("Todos los campos deben ser tipo string");
        const contacto = { nombre: nombre.toLowerCase(), email: email.toLowerCase(), telefono };
        contactos.push(contacto);
    } catch (error) {
        console.log(error.message);
    }
};

const eliminarContacto = function( email ) {
    try {
        if( !email || typeof email !== "string" ) return console.log("El campo email es requerido y debe ser tipo string");
        const contactoEncontrado = contactos.find(contacto => contacto.email === email);
        if(!contactoEncontrado) return console.log("Ese contacto no existe");
        contactos = contactos.filter(contacto => contacto.email !== email);
    } catch (error) {
        console.log(error.message);
    }
};

function buscarContacto( nombre ) {
    try {
        const contactoEncontrado = contactos.find(contacto => contacto.nombre === nombre);
        return console.log("Contacto Encontrado:", contactoEncontrado);
    } catch (error) {
        console.log(error.message);
    }
};

const mostrarContactos = () => {
    try {
        console.log("Todos los Contactos:")
        contactos.forEach(contacto => console.log(contacto));
    } catch (error) {
        console.log(error.message);
    }
};

agregarContacto("josé pablo", "lubiano83@gmail.com", "+56988310042");
agregarContacto("papo", "jplubiano@hotmail.com", "+56988310042");
agregarContacto("luca", "lucalubiano@gmail.com", "+56988310042");
eliminarContacto("lubiano83@gmail.com");
buscarContacto("papo");
mostrarContactos();

