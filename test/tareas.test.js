const test = require("node:test");
const assert = require("node:assert");
const { crearTarea, completarTarea, contarPendientes } = require("../src/tareas");

test("crear una tarea", () => {
    const tarea = crearTarea("Estudiar despliegue");
    assert.strictEqual(tarea.titulo, "Estudiar despliegue");
});

test("un título vacío da error", () => {
    assert.throws(() => crearTarea(""));
});

test("completar y contar pendientes", () => {
    crearTarea("Hacer la chuleta");
    completarTarea(1);
    assert.strictEqual(contarPendientes(), 1);
});