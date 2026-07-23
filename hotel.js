let habitaciones = [];

function timpoEspera(ms) {
    return new Promise ((resolve) => setTimeout(resolve,ms));
}

async function menu() {
    let opcion = prompt(
      "--- HOTEL ---\n" +
        "1. Registrar nueva habitación\n" +
        "2. Listar habitaciones\n" +
        "3. Buscar habitación por numero\n" +
        "4. Cambiar estado de una habitación\n" +
        "5. Eliminar habitación\n" +
        "6. Salir",
    );

    switch (opcion) {
        case "1":
          await registrar();
          break;
        case "2":
          listar();
          break;
        case "3":
          await buscar();
          break;
        case "4":
          await cambiar();
          break;
        case "5":
          eliminar();
          break;
        case "6":
          console.log("Cerrando administrador de Hotel...");
          return;
        default:
          console.log("Opción no válida!");
      }
      menu();
}

async function registrar() {
    let numero = parseInt(prompt("Ingrese número de la habitación:"));
    let tipo = prompt("Ingrese tipo de habitación: (Sencilla, Doble o Suite)");
    let precioNoche = parseFloat(prompt("Ingrese precio por noche:"));
    let estado = prompt("Ingrese estado de habitación: (Libre, Ocupada o Limpieza):");
    let huesped = prompt("Ingrese nombre de huésped: (Vacio si esta libre)");
  
    let habitacion = {
      numero,
      tipo,
      precioNoche,
      estado,
      huesped,
    };
  
    console.log("Validando información de la habitación...");
  
    await tiempoDeEspera(2000);
  
    habitaciones.push(habitacion);
    console.log("Habitación registrada correctamente");
}