let habitaciones = [];

function tiempoEspera(ms) {
    return new Promise ((resolve) => setTimeout(resolve,ms));
}

async function menu() {
    let opcion = prompt(
      "--- HOTEL ---\n\n" +
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
  
    await tiempoEspera(2000);
  
    habitaciones.push(habitacion);
    console.log("Habitación registrada correctamente");
}

function listar() {
    console.log("--- Habitaciones ---");
    habitaciones.forEach((habitacion) => {
      console.log(`Número: ${habitacion.numero} | Tipo: ${habitacion.tipo} | Precio por Noche: ${habitacion.precioNoche} | Estado: ${habitacion.estado} | Huésped: ${habitacion.huesped}`);
    });
}

async function buscar() {
    let numero = parseInt(prompt("Ingrese número de habitación a buscar:"));
    console.log("Consultando base de datos del hotel...");
  
    await tiempoEspera(2000);
  
    let habitacionBuscada = habitaciones.find((habitacion) => {
      return habitacion.numero === numero;
    });
    if (habitacionBuscada) {
      console.log(`Numero: ${habitacionBuscada.numero} | Tipo: ${habitacionBuscada.tipo} | Precio por Noche: ${habitacionBuscada.precioNoche} | Estado: ${habitacionBuscada.estado} | Huésped: ${habitacionBuscada.huesped}`);
    } else {
      console.log("Habitación no encontrada...");
    }
}

async function cambiar() {
    let numero = parseInt(prompt("Ingrese número de habitación a modificar:"));
    console.log("Esperando al personal del hotel...");
  
    await tiempoEspera(3000);
  
    let habitacionBuscada = habitaciones.find((habitacion) => {
      return habitacion.numero === numero;
    });
    if (habitacionBuscada) {
      let nuevoEstado = prompt("Ingrese el nuevo estado de la habitación:");
      habitacionBuscada.estado = nuevoEstado;
      if (nuevoEstado == "Ocupada") {
        let nuevoHuesped = prompt("Ingrese nombre de Huésped: ");
        habitacionBuscada.huesped = nuevoHuesped
      } else {
        habitacionBuscada.huesped = ""
      }

      console.log("Estado actualizado - Habitación: " + habitacionBuscada.numero);
    } else {
      console.log("Habitación no encontrada...");
    }
  }

menu();