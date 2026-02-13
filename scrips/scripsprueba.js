
//  Base de datos
let baseDatos = [];
let coordinadores = {
  nombre: "Arturo Ojeda",
  email: "123",
  identificacion: "123456789",
  direccion: "Carrera 10 # 20-30",
  celular: "3001234567",
}

// 🔍 Cargar datos guardados si existen
if (localStorage.getItem('campers')) {
  baseDatos = JSON.parse(localStorage.getItem('campers'));
}

if (localStorage.getItem('trainer')) {
  baseDatos = JSON.parse(localStorage.getItem('trainer'));
}
function registrarTrainer() {
  let trainer = {};

  trainer.id = Date.now();
  trainer.nombre = prompt("Ingrese su Nombre Completo");
  trainer.Apellido = prompt("Ingrese sus apellidos");
  trainer.identificacion = prompt("Ingrese su numero de identificacion");
  trainer.direccion = prompt("Ingrese su direccion");
  trainer.email = prompt("Ingrese su correo electrónico");
  trainer.acudiente = prompt("Ingrese el nombre de su acudiente");
  trainer.celular = prompt("Ingrese su numero de celular");
  trainer.fechaRegistro = new Date().toLocaleDateString();

  baseDatos.push(trainer);
  localStorage.setItem('trainer', JSON.stringify(baseDatos));

  console.log(" Trainer registrado exitosamente");
}
//  Registrar un camper
function registrarCamper() {
  let camper = {};

  camper.id = Date.now();
  camper.nombre = prompt("Ingrese su Nombre Completo");
  camper.Apellido = prompt("Ingrese sus apellidos");
  camper.identificacion = prompt("Ingrese su numero de identificacion");
  camper.direccion = prompt("Ingrese su direccion");
  camper.email = prompt("Ingrese su correo electrónico");
  camper.acudiente = prompt("Ingrese el nombre de su acudiente");
  camper.celular = prompt("Ingrese su numero de celular");
  camper.EstadoProceso = prompt("Ingrese el estado del proceso");
  camper.riesgo = prompt("Ingrese el nivel de riesgo");
  camper.fechaRegistro = new Date().toLocaleDateString();

  baseDatos.push(camper);
  localStorage.setItem('campers', JSON.stringify(baseDatos));

  console.log(" Camper registrado exitosamente");
  console.log("Total de campers:", baseDatos.length);
}

//  Ver todos los campers
function verCampers() {
  if (baseDatos.length === 0) {
    console.log("No hay campers registrados");
  } else {
    console.log("Total de campers:", baseDatos.length);
    console.log(JSON.stringify(baseDatos, null, 2));
  }
}

//  Limpiar base de datos
function limpiarBaseDatos() {
  const confirmacion = confirm(" ¿Estás seguro de eliminar TODOS los campers?");

  if (confirmacion) {
    localStorage.removeItem('campers');
    baseDatos = [];
    console.log("Base de datos limpiada completamente");
  } else {
    console.log("Operación cancelada");
  }
}

// camperLogin
function camperLogin() {
  const email = prompt("Ingrese su email completo para iniciar sesión");

  const camperEncontrado = baseDatos.find(camper => camper.email.toLowerCase() === email.toLowerCase());

  if (camperEncontrado) {
    console.log(`Bienvenido, ${camperEncontrado.nombre}!`);
    menu();
  } else {
    alert("Usuario o contraseña incorrecta, intente nuevamente o regístrese :(");
    menuPrincipal();
  }
}

// trainerLogin
function trainerLogin() {
  const email = prompt("Ingrese su email completo para iniciar sesión");

  const trainerEncontrado = baseDatos.find(trainer => trainer.email.toLowerCase() === email.toLowerCase());

  if (trainerEncontrado) {
    console.log(`Bienvenido, ${trainerEncontrado.nombre}!`);
    menu();
  } else {
    alert("Usuario o contraseña incorrecta, intente nuevamente:(");
    menuPrincipal();
  }
}
// coordinadorLogin
function coordinadorLogin() {
  const email = prompt("Ingrese su correo para iniciar sesión");

  const coordinadorEncontrado = baseDatos.find(coordinadores => coordinadores.email.toLowerCase() === email.toLowerCase());

  if (coordinadorEncontrado) {
    alert(`Bienvenido, ${coordinadorEncontrado.nombre}!`);
    menu();
  } else {
    alert("Usuario o contraseña incorrectos.");
    menuPrincipal();
  }
}
function menu (){
  respuesta = prompt("\n=== SISTEMA DE GESTIÓN DE CAMPERS ===\n 1. Agregar nuevo camper\n 2. Ver todos los campers\n 3. Eliminar todos los datos\n =====================================\n")

    if (respuesta === "1"){
      registrarCamper();
    } 

    else if (respuesta === "2"){
      verCampers();
    } 

    else if (respuesta === "3"){
      limpiarBaseDatos();
    }
    else {
      alert("Opcion No Valida")
    }
} 
function menuPrincipal (){
  respuesta = prompt("\n=========== Campsulands ===========\n----------------- Escoge tu Rol -----------------\n 1. Camper\n 2. Trainer\n 3. Coordinardor\n 4. Salir\n ===============================\n")

    if (respuesta === "1"){
      camperLogin();
    } 

    else if (respuesta === "2"){
      trainerLogin();
    } 

    else if (respuesta === "3"){
      coordinadorLogin();
    }

    else if (respuesta === "4"){
      alert("Gracias por usar el sistema. ¡Hasta luego!");
    }
    else {
      alert("Opcion No Valida")
    }
} 

menuPrincipal();