import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [os, setOs] = useState("");
  const [consulta, setConsulta] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [prescripcion, setPrecripcion] = useState("");
  const [actualizacion, setActualizacion] = useState("");
  const [newprescription, setNewprescription] = useState("");

  const [error, setError] = useState(false)

useEffect(() => {
  if( Object.keys(paciente).length > 0) {
  setNombre(paciente.nombre)
  setDni(paciente.dni)
  setEmail(paciente.email)
  setTelefono(paciente.telefono)
  setOs(paciente.os)
  setConsulta(paciente.consulta)
  setDiagnostico(paciente.diagnostico)
  setPrecripcion(paciente.prescripcion)
  setActualizacion(paciente.actualizacion)
  setNewprescription(paciente.newprescription)

  }
}, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36)
    return date+random

  }

// validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre, dni, email, telefono, os, consulta, diagnostico, prescripcion, actualizacion, newprescription].includes("")) {
      console.log("hay campos vacios")
      setError(true)
      return;
      } 
      setError(false)


      //Obejeto de paciente
      const objetoPaciente={
        nombre,
        dni,
        email,
        telefono,
        os,
        consulta,
        diagnostico,
        prescripcion,
        actualizacion,
        newprescription,
       
      }

      if(paciente.id) {
        //Editando el Registro
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})
      }else {
        //Nuevo registro
        objetoPaciente.id =  generarId();
        setPacientes([...pacientes , objetoPaciente]);
      }
      

    

      //Reiniciar el formulario
      setNombre("")
      setDni("")
      setEmail("")
      setTelefono("")
      setOs("")
      setConsulta("")
      setDiagnostico("")
      setPrecripcion("")
      setActualizacion("")
      setNewprescription("")


    }
  




  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="font-black text-3x1 text-center">Seguimiento de pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes y {""}
      <span className="text-indigo-400 font-bold"> Administralos</span>
    </p>
    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
    
>
    {error && (<Error>Todos los campos son obligatorios</Error>)}
      <div className="mb-5">
        <label htmlFor="Nombre" className="block text-gray-700 uppercase font-bold"> Nombre del Paciente</label>
        <input 
        id="Nombre"
          type="text"
          placeholder= "Nombre del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e) => setNombre(e.target.value) }

        />
      </div>
      <div className="mb-5">
        <label htmlFor="DNI" className="block text-gray-700 uppercase font-bold"> DNI del Paciente</label>
        <input 
        id="DNI"
          type="text"
          placeholder= "DNI"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={dni}
          onChange={(e) => setDni(e.target.value) }
        />
      </div>
      <div className="mb-5">
        <label htmlFor="Email" className="block text-gray-700 uppercase font-bold"> Email del Paciente</label>
        <input 
        id="Email"
          type="email"
          placeholder= "Email del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />
      </div>
      <div className="mb-5">
        <label htmlFor="Telefono" className="block text-gray-700 uppercase font-bold"> Telefono del Paciente</label>
        <input 
        id="Telefono"
          type="text"
          placeholder= "Telefono del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value) }
        />
      </div>
      <div className="mb-5">
        <label htmlFor="OS" className="block text-gray-700 uppercase font-bold"> OS del Paciente</label>
        <input 
        id="OS"
          type="text"
          placeholder= "Obra Social"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={os}
          onChange={(e) => setOs(e.target.value) }
        />
      </div>
      <div className="mb-5">
        <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold"> Fecha de Consulta Fisiatrica</label>
        <input 
        id="Alta"
          type="Date"
          placeholder= "Alta de paciente"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value) }
        />
      </div>
      <div className="mb-5">
        <label htmlFor="Diagnostico del Fisiatra" className="block text-gray-700 uppercase font-bold"> Diagnostico</label>
        <textarea 
          id="Diagnostico del Fisiatra"
          className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
          placeholder="Escribe el diagnostico del Paciente"
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value) }
        />
      </div>
      <div>
      <p className="font-bold mb-5 text-gray-700 uppercase text-center">Indicaciones </p>
      <label htmlFor="Prescripcion" className="block text-gray-700 uppercase font-bold"> Prescripcion</label>
        <textarea 
          id="Prescripcion"
          className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
          placeholder="Escribe la Prescripcion del Paciente"
          value={prescripcion}
          onChange={(e) => setPrecripcion(e.target.value) }
        />
        </div>
        <div>
        <label htmlFor="Actualizacion" className="block text-gray-700 uppercase font-bold"> Actualizacion - Fecha</label>
        <input 
        id="Actualizacion"
          type="Date"
          placeholder= "Actualizacion - Fecha"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={actualizacion}
          onChange={(e) => setActualizacion(e.target.value) }
        />
        </div>
        <div>
        <label htmlFor="PrescripcionNueva" className="block text-gray-700 uppercase font-bold m-2"> Nueva Prescripcion</label>
        <textarea 
          id="PrescripcionNueva"
          className="border-2 w-full p-2 mt-2 placerholder-gray-400 rounded-md"
          placeholder="Escribe la Nueva prescripcion"
          value={newprescription}
          onChange={(e) => setNewprescription(e.target.value) }
        />
        </div>
    
              <input 
        type="submit"
        className="bg-indigo-400 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors hover:bg-indigo-500"
        value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
      />
      
    </form>
    </div>
    
  )
}

export default Formulario;