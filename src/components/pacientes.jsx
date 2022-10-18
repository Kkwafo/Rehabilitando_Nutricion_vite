
function Pacientes ({paciente, setPaciente, eliminarPaciente}) {
  const {nombre, dni, email, telefono, os, consulta, diagnostico, actualizacion, prescripcion, newprescription, id } = paciente
 
  const handleEliminar = () => {
    const respuesta = confirm("Deseas Eliminar este paciente")
    if (respuesta){
      eliminarPaciente(id)
    }
  }
return (
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
      <span className="font-normal normal-case"> {nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">DNI: {""}
      <span className="font-normal normal-case"> {dni}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
      <span className="font-normal normal-case"> {email} </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Telefono: {""}
      <span className="font-normal normal-case"> {telefono}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Obra Social: {""}
      <span className="font-normal normal-case"> {os}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de consulta: {""}
      <span className="font-normal normal-case"> {consulta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Diagnostico: {""}
      <span className="font-normal normal-case">{diagnostico}.</span>
      </p>
      <p className = "font-bold mb-4 text-indigo-400 uppercase text-lg"> Indicaciones</p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Prescripcion: {""}
      <span className="font-normal normal-case">{prescripcion}.</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Actualizacion - fecha: {""}
      <span className="font-normal normal-case">{actualizacion}.</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Nueva Prescripcion: {""}
      <span className="font-normal normal-case">{newprescription}.</span>
      </p>
      <div className = "flex justify-between mt-10">
        <button
          onClick={() => setPaciente(paciente)}
          type="button"
          className="py-2 px-10 bg-indigo-400 hover:bg-indigo-700 font-bold text-white rounded-lg">
          Editar
        </button>
        <button
        onClick={handleEliminar}
          type="button"
          className="py-2 px-10 bg-indigo-400 hover:bg-red-600 font-bold text-white rounded-lg">
          Eliminar
        </button>
      </div>


    </div>)
    }
    export default Pacientes;