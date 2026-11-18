const tareas = [];

function crearTarea(titulo) {
    if (titulo === "") {
        throw new Error("El título no puede estar vacío");
    }
    const tarea = {
        id: tareas.length + 1,
        titulo: titulo,
        completada: false
    };
    tareas.push(tarea);
    return tarea;
}

function completarTarea(id) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            tareas[i].completada = true;
            return true;
        }
    }
    return false;
}

function contarPendientes() {
    let pendientes = 0;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].completada === false) {
            pendientes++;
        }
    }
    return pendientes;
}

module.exports = { crearTarea, completarTarea, contarPendientes };