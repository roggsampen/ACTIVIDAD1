// import type { Libro } from "../libros-data/libros";
import { Search } from "./Search";
import { useContext } from "react";
import { arrayLibro } from "../libros-data/libros";
import { GlobalContext } from "../context/GlobalContext";

export const CustomHeader = () => {

  const {setFilteredLibros} = useContext(GlobalContext);

  //Funcion para manejar lo que se escribe en la caja de busqueda
  const handleTerminoBusqueda = (palabra: string) => {
    if (palabra.trim() === '') {
      setFilteredLibros(arrayLibro);
    } else {
      //crea un nuevo array
      const filtered = arrayLibro.filter(libro => libro.title.toLowerCase().includes(palabra.toLowerCase()));
      setFilteredLibros(filtered);
    }
  }

  return(
    <div className="content-center">
      {/* Nombre */}
      <h1>Relatos de Papel</h1>
      <p>Descubre y compra tu libro favorito</p>

      {/* Buscar */}
      <Search 
        placeholder="Buscar en toda la tienda" 
        onLabelBuscar={(palabra) => handleTerminoBusqueda(palabra)}
      />

    </div>
  );
}