//  Base de datos
let baseDatos = [];

// 🔍 Cargar datos guardados si existen
if (localStorage.getItem('campers')) {
  baseDatos = JSON.parse(localStorage.getItem('campers'));
}

//  Registrar un camper
function registrarCamper() {
  let camper = {};
  
  camper.id = Date.now();
  camper.nombre = prompt("Ingrese su Nombre Completo");
  camper.Apellido = prompt("Ingrese sus apellidos");
  camper.identificacion = prompt("Ingrese su numero de identificacion");
  camper.direccion = prompt("Ingrese su direccion");
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

// Menú principal
function menu() {
  console.log("\n=== SISTEMA DE GESTIÓN DE CAMPERS ===");
  console.log("1. registrarCamper() - Agregar nuevo camper");
  console.log("2. verCampers() - Ver todos los campers");
  console.log("3. limpiarBaseDatos() - Eliminar todos los datos");
  console.log("=====================================\n");
  respuesta = prompt("Ingrese el número de la función que desea ejecutar (1, 2 o 3)");
  if (respuesta === "1") {
    registrarCamper();
  } else if (respuesta === "2") {
    verCampers();
  } else if (respuesta === "3") {
    limpiarBaseDatos();
  } else {
    console.log("Opción no válida. Por favor, ingrese 1, 2 o 3.");
  }
}

// Mostrar el menú
menu();