//Nuestra primera linea de codigo en JavaScript
console.log("Hola Mundo");

numero1= 2 ;
numero2= 5 ;
console.log(typeof numero1);

texto1 = "Textico"; // String
texto2 = "Mas texto";
console.log(typeof texto1);
unionTextos= texto1 + " " + texto2;
console.log(unionTextos);

operacionesBasicas= ((5*8)+10-5)/2;
console.log(operacionesBasicas); 

//Funciones con parametros y con retorno
    funcionSuma = (a, b) => {
        return a + b;
    }

    let resultadoSuma = funcionSuma(10, 10);
    console.log(resultadoSuma);

//Funcion con parametros y sin retorno
    funcionResta = (a, b) => {
        console.log(a - b);
    }

    //Base de Datos de un proceso de inscripcion a un curso de programacion
    let camper = {}


    // Ingresar Datos Externos
    camper.nombre = prompt("Ingrese su Nombre Completo");
    camper.Apellido = prompt("Ingrese sus apellidos");
    camper.indetificacion = prompt("Ingrese su numero de identificacion");
    camper.direccion = prompt("Ingrese su direccion");
    camper.acudiente = prompt("Ingrese el nombre de su acudiente");     
    camper.celular = prompt("Ingrese su numero de celular");
    camper.EstadoProceso = prompt("Ingrese el estado del proceso");
    camper.riesgo = prompt("Ingrese el nivel de riesgo");
    console.log(camper);

    

   
