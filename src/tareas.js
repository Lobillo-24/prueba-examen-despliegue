const tareas = [];
/**
 * Crea la tarea con su título
 * @param {string} 1 - Recibe el texto del título
 * @returns {array} Devuelve el array de las tareas
 * @throws {Error} Solo si el título está vacíp
 */
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
/**
 * Completa la tarea
 * @param {number} 1 - Recibe el id de la tarea
 * @returns {boolean} Devuelve si coincide con alguna devuelve true
 * @returns {boolean} Devuelve si no coincide con alguna devuelve false
 */
function completarTarea(id) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            tareas[i].completada = true;
            return true;
        }
    }
    return false;
}
/**
 * Cuenta las pendientes
 * @param {number} 1 - Recorre el array de las tareas
 * @returns {number} Va sumando de 1 en 1 según las tareas que falten por completar
 */
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