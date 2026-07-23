let habitaciones = [];

function timpoEspera(ms) {
    return new Promise ((resolve) => setTimeout(resolve,ms));
}

async function menu() {
    let opcion = prompt(
      "*** Administración Hotel ***\n" +
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