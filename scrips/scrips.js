// Una promesa es un objeto que representa la eventual finalización o fracaso de una operación asíncrona.

//Utilidades de las promesas:
const log = (...args) => console.log(...args); // Función de ayuda para imprimir mensajes en la consola

const titulo = (n, nombre) => {
  log("\n" + "=".repeat(50));
  log(`EJERCICIO ${n}: ${nombre}`);
  log("=".repeat(50));
};
//plantilla para crear promesas con delay que se resuelven o rechazan después de un tiempo determinado
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const resolverEn = (ms,valor) => 
    new Promise((resolve) => setTimeout(() => resolve(valor), ms));

const rechazarEn = (ms,error) => 
    new Promise((_, reject) => setTimeout(() => reject(error), ms));

//Ejemplo de uso de la función resolverEn
function runEjercicio1() {
    titulo(1, "Mi primera promesa");
    function saludarAsync(nombre) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Hola, ${nombre}!`);
            }, 800);

        });

    }
    log ("Antes de llamar a saludarAsync");
    saludarAsync("Mundo").then((mensaje) => {
        log(mensaje);
    });
}    

