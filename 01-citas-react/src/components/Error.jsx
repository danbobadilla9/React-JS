//Otra manera de comunicar componentes es utilizando :
//Children toma todo lo que se le envie al componente, la ventaja es que  podemos enviar mucho codigo HTML, en lugar de dividirlo en props 
export const Error = ({ children }) => {
// export const Error = ({ mensaje }) => {
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
            {/* <p>{ mensaje }</p> */}
            { children }
        </div>
    )
}