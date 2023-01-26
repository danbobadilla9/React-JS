import { useState, useEffect }from 'react';
import { Error } from './Error';
//State cual es el estado de nuestra aplicacion,es una variable con informacion releveante en nuestra apliacion, puede pertenecer a componentes, se crea usando la funcion useState();
//Cada que se cambia el state , React va a renderizar y actualizar esos cambios , para modificarlo utilizamos la funcion que obtuvimos 

//useEffect es otro hook muy comun, siempre es un callack , se ejecuta cuando el state cambia o el componente esta listo, sustituto de componentDidMount() y Update(), es un excelente lugar para colocar codigo que consulta una API o para obtener datos del LocalStorage , podemos pasarle una dependencia y escuchar los cambios que suceden en una variable y puede actualizar el componente cuando esto suceda, sintaxis: useEffect( () => {},[dependencias]), la dependencia es lo que revisa cuando cambie el valor 

//Eventos son camelCase , en lugar de onclick se usa onClick , todos los eventos de js estan en react

const  Formulario = ({ pacientes , setPacientes, paciente, setPaciente }) =>  {
    //  Los hooks no pueden estar en un return o dentro de un condiciona 
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');

    const [error,setError] = useState(false);

    //Podemos tener multiples useEffect
    useEffect( () => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }else{

        }
    },[paciente]);//Solo se ejecuta 1 vez cuando paciente cambie 
    //Si pasamos las dependencias vacias, solo se ejecutara 1 vez , revisa cuando el componente este listo


    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random+fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('Campo vacio');
            setError(true);
            return;
        }
        setError(false);
        //Objeto de paciente 
        const objetoPacinete = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            //Editando el registro
            objetoPacinete.id = paciente.id;
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===paciente.id ? objetoPacinete: pacienteState);
            setPacientes(pacientesActualizados)
            setPaciente({});
        }else{
            //Nuevo Registro
            objetoPacinete.id = generarId();
            setPacientes([...pacientes,objetoPacinete]);
        }


        //Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-10 mb-5" onSubmit = { handleSubmit }>
                { error &&
                    // <Error mensaje = 'Todos los campos son obligatorios'/>
                    <Error><p>Todos los campos son obligatorios</p></Error> //Enviando mensaje con children
                }
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input type="text" placeholder="Nombre de la Mascota " className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" id="mascota" value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input type="text" placeholder="Nombre del Propietario " className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" id="propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Contacto Propieratario " className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" id="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input type="date" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" id="alta" value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea name="" id="sintomas" cols="30" rows="10" className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" placeholder="Desribe los Sintomas " value={sintomas} onChange={ (e) => setSintomas(e.target.value)}/>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 hover:bg-indigo-700 transition-all cursor-pointer text-white uppercase font-bold" value={paciente.id ? 'Editar Paciente':'Agregar Paciente'}/>

            </form>
        </div>
    )
}

export default Formulario