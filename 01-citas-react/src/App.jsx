import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import {Header} from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes';



function App() {
  //Fragment <> es como un div pero no se renderiza esa etiqueta en el HTML 
  // Props: Como el state o funciones solo estan disponibles en ese componente pero podemos pasar estos valore utlizando las propiedades "Props", unicamente se pasan del Padre -> Hijo . Sintaxis:  <Header nombreProp = {inf}/> aceptan cualquier tipo de datos. Si un state se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal. Redux o Context evitan hacer todo este trabajo

  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes') )?? []);
  const [paciente,setPaciente] = useState({});
  



  useEffect( () => {
    localStorage.setItem('pacientes',JSON.stringify( pacientes ) );
  }, [pacientes]);

  const eliminarPaciente =  id  => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    // container otorga al div un 100% del largo mx-auto es el margen (my mt)
    <div className=' container mx-auto mt-20'>
      <Header />
      <div className=' mt-12 md:flex '>
        <Formulario 
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { paciente }
        />
        <ListadoPacientes 
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }
        />
      </div>
    </div>
  );
}

export default App
