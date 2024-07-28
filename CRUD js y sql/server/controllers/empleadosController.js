// empleadosController.js

// Exportar la función como un módulo para recibir db como parámetro
module.exports.createEmpleado = (db) => (req, res) => {
    const { nombre, apellido, legajo } = req.body;

    db.query('INSERT INTO empleados (nombre, apellido, legajo) VALUES (?, ?, ?)', [nombre, apellido, legajo], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al insertar empleado");
        } else {
            res.send("EMPLEADO REGISTRADO");
        }
    });
};