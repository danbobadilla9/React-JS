import { useContext } from "react";
import BebidasContext from "../Context/BebidasProvider";
const useBebidas = () =>{
    return useContext(BebidasContext);
}

export default useBebidas;

