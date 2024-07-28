import { useState } from 'react'
import Axios from 'axios';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [legajo, setLegajo] = useState('');

  // Función para manejar la creación de un nuevo empleado
  const agregarEmpleado = () => {
    Axios.post("http://localhost:3000/create", {
      nombre: nombre,
      apellido: apellido,
      legajo: legajo,
    }).then(() => {
      alert("Empleado registrado");
      // getEmpleado();
      // Limpiar los campos después de registrar
      setNombre('');
      setApellido('');
      setLegajo('');
    }).catch(error => {
      console.error("Error al registrar empleado:", error);
    });
  }

  return (
    <>
    <div className='Datos'>
          <label>
            Nombre:
            <input
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              type="text"
            />
          </label>

          <label>
            Apellido:
            <input
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
              type="text"
            />
          </label>

          <label>
            Legajo:
            <input
              value={legajo}
              onChange={(event) => setLegajo(event.target.value)}
              type="number"
            />
          </label>

          {/* Botones para registrar y actualizar */}
          <button className="btn success" onClick={agregarEmpleado}>Registrar</button>
        </div>

    </>
  )
}

export default App
