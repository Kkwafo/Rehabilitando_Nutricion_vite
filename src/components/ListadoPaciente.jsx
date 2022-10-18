
import Pacientes from "./pacientes"


const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className= "md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
      <h2 className="font-black text-3x1 text-center">Listado de pacientes</h2>
      <p className="text-xl text-center mt-5 mb-10"> Administra tus {""}
      <span className="text-indigo-400 font-bold"> Pacientes y Datos</span></p>

      {pacientes.map(paciente => 
     (<Pacientes 
     key={paciente.id}
      paciente={paciente}
      setPaciente={setPaciente}
      eliminarPaciente = {eliminarPaciente}
     />)
    )}
          </>

        )  : (
          <>
          <h2 className="font-black text-3x1 text-center">No hay Pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10"> Comienza agregando pacientes {""}
          <span className="text-indigo-400 font-bold"> y apareceran en este lugar.</span></p>
          </>

        )}

    </div>
  )
}

export default ListadoPaciente