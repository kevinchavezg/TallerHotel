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