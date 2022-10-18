import {useState, useEffect}from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
import "./index.css"

function App() {

  const [pacientes, setPacientes] = useState( () => JSON.parse(localStorage.getItem("pacientes")) ?? []);
  const [paciente, setPaciente] = useState({});

useEffect(() => { localStorage.setItem("pacientes", JSON.stringify(pacientes))}, [pacientes])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }  //traigo lo que son diferentes al id que estoy pasando.

  return (
    <div className="container mx-auto mt-20">
   <Header />
   <div className ="mt-12 md:flex">
   <Formulario
   setPacientes={setPacientes}
   pacientes={pacientes}
   paciente={paciente}
   setPaciente={setPaciente}
    />
   <ListadoPaciente
   pacientes={pacientes}
   setPaciente={setPaciente}
   eliminarPaciente={eliminarPaciente}
   />
   </div>
    </div>
  )
}

export default App
