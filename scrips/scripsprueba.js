
//  Base de datos
let baseDatos = [];
let coordinadores = [
{
  nombre: "Arturo Ojeda",
  email: "123@gmail.com",
  identificacion: "123456789",
  direccion: "Carrera 10 # 20-30",
  celular: "3001234567",
},
{
  nombre: "Andres Castellanos",
  email: "456@gmail.com",
  identificacion: "987654321",
  direccion: "Calle 5 # 10-15",
  celular: "3007654321",
}
];

// 🔍 Cargar datos guardados si existen
if (localStorage.getItem('campers')) {
  baseDatos = JSON.parse(localStorage.getItem('campers'));
}

if (localStorage.getItem('trainer')) {
  baseDatos = JSON.parse(localStorage.getItem('trainer'));
}

//=====================================================================CAMPER=====================================================================
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

function menuCamper() {
  respuesta = prompt("\n=== MENÚ DE CAMPER ===\n 1. Ver mi informacion\n 2. Volver al menú principal\n =====================================\n")

  if (respuesta === "1"){
    verInformacionCamper();
  } 

  else if (respuesta === "2"){
    menuPrincipal();
  }
  else {
    alert("Opcion No Valida")
    menuCamper();
  }
}

function verInformacionCamper() {
  const email = prompt("Ingrese su email para ver su información");

  const camperEncontrado = baseDatos.find(camper => camper.email.toLowerCase() === email.toLowerCase());

  if (camperEncontrado) {
    console.log(`Información de ${camperEncontrado.nombre}:`);
    console.log(`Identificación: ${camperEncontrado.identificacion}`);
    console.log(`Dirección: ${camperEncontrado.direccion}`);
    console.log(`Acudiente: ${camperEncontrado.acudiente}`);
    console.log(`Celular: ${camperEncontrado.celular}`);
    console.log(`Estado del Proceso: ${camperEncontrado.EstadoProceso}`);
    console.log(`Nivel de Riesgo: ${camperEncontrado.riesgo}`);
    console.log(`Fecha de Registro: ${camperEncontrado.fechaRegistro}`);
  } else {
    alert("Usuario no encontrado.");
    menuCamper();
  } 
}
//=====================================================================TRAINER=====================================================================


// trainerLogin
function trainerLogin() {
  const email = prompt("Ingrese su email completo para iniciar sesión");

  const trainerEncontrado = baseDatos.find(trainer => trainer.email.toLowerCase() === email.toLowerCase());

  if (trainerEncontrado) {
    console.log(`Bienvenido, ${trainerEncontrado.nombre}!`);
    menuTrainer();
  } else {
    alert("Usuario o contraseña incorrecta, intente nuevamente:(");
    menuPrincipal();
  }
  }
function menuTrainer() {
  respuesta = prompt("\n=== MENÚ DE TRAINER ===\n 1. Ver mi informacion\n 2. Volver al menú principal\n =====================================\n")

  if (respuesta === "1"){
    verInformacionTrainer();
  } 

  else if (respuesta === "2"){
    menuPrincipal();
  }
  else {
    alert("Opcion No Valida")
    menuTrainer();
  }
}

function verInformacionTrainer() {
  const email = prompt("Ingrese su email para ver su información");

  const trainerEncontrado = baseDatos.find(trainer => trainer.email.toLowerCase() === email.toLowerCase());

  if (trainerEncontrado) {
    console.log(`Información de ${trainerEncontrado.nombre}:`);
    console.log(`Identificación: ${trainerEncontrado.identificacion}`);
    console.log(`Dirección: ${trainerEncontrado.direccion}`);
    console.log(`Acudiente: ${trainerEncontrado.acudiente}`);
    console.log(`Celular: ${trainerEncontrado.celular}`);
    console.log(`Fecha de Registro: ${trainerEncontrado.fechaRegistro}`);
  } else {
    alert("Usuario no encontrado.");
    menuTrainer();
  } 
} 
  
//=======================================================================Coordinador=======================================================================
function coordinadorLogin() {
  const email = prompt("Ingrese su correo para iniciar sesión");

  const coordinadorEncontrado = coordinadores.find(
    coord => coord.email.toLowerCase() === email.toLowerCase()
  ); 

  if (coordinadorEncontrado) {
    alert(`Bienvenido, ${coordinadorEncontrado.nombre}!`);
    menuCoordinador();
  } else {
    alert("Usuario no encontrado.");
    menuPrincipal();
  }
}

function menuCoordinador() {
  respuesta = prompt("\n=== MENÚ DE COORDINADOR ===\n 1. Gestion de Campers\n 2. Gestion de Trainers\n 3. Volver al menú principal\n =====================================\n")

  if (respuesta === "1"){
    menuGestionCampers();
  } 

  else if (respuesta === "2"){
    menuGestionTrainers();
  }

  else if (respuesta === "3"){
    menuPrincipal();
  }
  else {
    alert("Opcion No Valida")
    menuCoordinador();
  }
}

function menuGestionCampers (){
  respuesta = prompt("\n=== SISTEMA DE GESTIÓN DE CAMPERS ===\n 1. Agregar nuevo camper\n 2. Ver todos los campers\n 3. Eliminar camper\n 4. Eliminar todos los datos \n =====================================\n")
  
    if (respuesta === "1"){
      registrarCamper();
    } 
  
    else if (respuesta === "2"){
      verCampers();
    } 
  
    else if (respuesta === "3"){
      eliminarCamper();
    }

 else if (respuesta === "4"){
      limpiarBaseDatos();
    }
    else {
      alert("Opcion No Valida")
    }
  }
  


//  Registrar un camper
function registrarCamper() {
  let camper = {};

  camper.id = Date.now();
  camper.nombre = prompt("Nombre Completo");
  camper.identificacion = prompt("Ingrese el numero de identificacion");
  camper.direccion = prompt("Ingrese la direccion");
  camper.email = prompt("Correo electrónico");
  camper.acudiente = prompt("Ingrese el nombre de el acudiente");
  camper.celular = prompt("Numero de celular");
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
    console.log("No hay campers registrados.");
    return;
  }
  
  console.log("=== Lista de Campers Registrados ===");
  baseDatos.forEach((camper, index) => {
    console.log(`${index + 1}. ${camper.nombre} - ${camper.email} - ${camper.identificacion}`);
  });
}

//  Eliminar un camper
function eliminarCamper() {
  const email = prompt("Ingrese el email del camper que desea eliminar");

  const index = baseDatos.findIndex(camper => camper.email.toLowerCase() === email.toLowerCase());

  if (index !== -1) {
    baseDatos.splice(index, 1);
    localStorage.setItem('campers', JSON.stringify(baseDatos));
    console.log(`Camper con email ${email} eliminado exitosamente.`);
  } else {
    console.log(`No se encontró un camper con el email ${email}.`);
  }
}

//  Limpiar base de datos de campers
function limpiarBaseDatos() {
  if (confirm("¿Está seguro de que desea eliminar todos los datos de campers? Esta acción no se puede deshacer.")) {
    baseDatos = [];
    localStorage.removeItem('campers');
    console.log("Todos los datos de campers han sido eliminados.");
  } else {
    console.log("Operación cancelada. No se han eliminado los datos.");
  }
}
function menuGestionTrainers (){
respuesta = prompt("\n=== SISTEMA DE GESTIÓN DE TRAINERS ===\n 1. Agregar nuevo trainer\n 2. Ver todos los trainers\n 3. Eliminar trainer\n 4. Eliminar todos los datos =====================================\n")

  if (respuesta === "1"){
    registrarTrainer();
  } 

  else if (respuesta === "2"){
    verTrainers();
  }

  else if (respuesta === "3"){
    eliminarTrainer();
  }

  else if (respuesta === "4"){
    limpiarBaseDatosTrainers();
  }
  else {
    alert("Opcion No Valida")
  } 
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

function verTrainers() {
  if (baseDatos.length === 0) {
    console.log("No hay trainers registrados.");
    return;
  }
  
  console.log("=== Lista de Trainers Registrados ===");
  baseDatos.forEach((trainer, index) => {
    console.log(`${index + 1}. ${trainer.nombre} ${trainer.Apellido} - ${trainer.email} - ${trainer.identificacion}`);
  });
} 

function eliminarTrainer() {
  const email = prompt("Ingrese el email del trainer que desea eliminar");
  
  const index = baseDatos.findIndex(trainer => trainer.email.toLowerCase() === email.toLowerCase());  

  if (index !== -1) {
    baseDatos.splice(index, 1);
    localStorage.setItem('trainer', JSON.stringify(baseDatos));
    console.log(`Trainer con email ${email} eliminado exitosamente.`);
  } else {
    console.log(`No se encontró un trainer con el email ${email}.`);
  }
}

function limpiarBaseDatosTrainers() {
  if (confirm("¿Está seguro de que desea eliminar todos los datos de trainers? Esta acción no se puede deshacer.")) {
    baseDatos = [];
    localStorage.removeItem('trainer');
    console.log("Todos los datos de trainers han sido eliminados.");
  } else {
    console.log("Operación cancelada. No se han eliminado los datos.");
  }
} 
//=====================================================================MENU PRINCIPAL=====================================================================
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
 