import { useState} from 'react'
import Formulario from "./components/Formulario";
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes";
function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }


//Aqui podemos crear funciones fuera del return pero se pueden usar expresiones


  // const sumar = () => {
  //   console.log(2+2);
  // }

  // sumar();
//Las llaves dentro del return {} indica que es codigo js no funcionan los if ahi, solo el ternario
  const edad = 18;
  return (
      // <>
      //   {edad >= 18 ? 'Eres mayor de edad': 'no eres mayor de edad'}
      //   <h1>{'Hola Mundo'.toLocaleUpperCase()}</h1>
      //   <h1>{edad}</h1>
      //   <img src="algunaimagen.jpg"  />
      // </>
      <div className="container mx-auto mt-20">
        <Header />
        
        <div className="mt-12 md:flex">
          <Formulario setPacientes ={setPacientes} pacientes = {pacientes} paciente = {paciente} setPaciente = {setPaciente}/>
          <ListadoPacientes pacientes = {pacientes} setPaciente = {setPaciente} eliminarPaciente={eliminarPaciente}/>
        </div>

      </div>
  )
}

export default App
