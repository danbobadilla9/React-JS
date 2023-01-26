import { useState,createContext } from "react";
import { obtenerDiferenciaYear,calcularMarca,calcularPlan,formatearDinero } from "../helpers";
const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {//este es el provider 
    //aqui definimos state,funciones y esta separado de la aplicacion, dentro del value es donde se pone a disposicion para los otros componentes

    const[datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    });

    const [error,setError] = useState('');
    const [resultado,setResultado] = useState(0);
    const [cargando,setCargando] = useState(false);

    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const cotizarSeguro = () => {
        //una base
        let resultado = 2000;
        //Obtener diferencia de años 
        const diferencia = obtenerDiferenciaYear(datos.year);
        //Hay que restar el 3% por cada año 
        resultado -= ((diferencia*3)*resultado)/100;
        //Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca);
        //Plan basico 20%
        //Plan completo 50%
        resultado*=calcularPlan(datos.plan);
        resultado = resultado.toFixed(2);
        //Formatear dinero
        resultado = formatearDinero(resultado);
        setCargando(true);
        setTimeout( () => {
            setResultado(resultado);        
            setCargando(false);
        },3000);
    }

    return (
        // esto funciona con llave-valor
        <CotizadorContext.Provider value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider
}
export default CotizadorContext;
