/* Ejercicio 1 */

const crearUsuario = ( nombre, apellido, email, ocupacion, edad ) => {
    try {
        if(!nombre, !apellido, !email, !ocupacion, !edad) return console.log("Todos los campos son necesarios");
        if(typeof nombre !== "string" || typeof apellido !== "string" || typeof email !== "string" || typeof ocupacion !== "string" || typeof edad !== "number") return console.log("Todos los datos deben ser formato string menos la edad que es formato numero");
    
        usuario = {
            nombre,
            apellido,
            email,
            ocupacion,
            edad
        }
    
        return console.log(usuario);
    } catch (error) {
        console.log(error.message);
    }
};

crearUsuario("josé Pablo", "Lubiano", "lubiano83@gmail.com", "desarrollador", 41);
crearUsuario("Luca", "Lubiano", "lucalubiano@gmail.com", "hippie", 32);
