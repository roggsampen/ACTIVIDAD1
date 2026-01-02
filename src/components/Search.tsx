import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onLabelBuscar: (palabra: string) => void;
}

export const Search = ({ placeholder = 'Buscar', onLabelBuscar}: Props) => {

    //Hook useState (variable, funcion que cambia la variable, estado inicial de la variable)
    const [palabra, setPalabra] = useState('');

    //Hook useEffect se dispara cada vez que cambia la palabra.
    //useEffect(callback, [dependencias que detonan el useEffect])
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            onLabelBuscar(palabra)
        }, 700);
      
        //Se llama cuando el componente 'Search' deja de existir(se desmonta) o se vuelve a disparar el efecto
        return () => {
            clearTimeout(timeoutId);
        }

    }, [palabra, onLabelBuscar]);

    return(
        <div className="search-container">
            <input 
                type="text" 
                placeholder={ placeholder }
                value={palabra}
                onChange={(event) => setPalabra(event.target.value)}
            />

        </div>
    );
}