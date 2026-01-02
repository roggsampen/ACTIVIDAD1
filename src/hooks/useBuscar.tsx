import { useState } from "react"
import { arrayLibro, type Libro } from "../libros-data/libros";

export const useBuscar = () => {
  
  //Hook useState para la lista de libros filtrada
  // const [filteredLibros, setFilteredLibros] = useState(arrayLibro);

  const [filteredLibros, setFilteredLibros] = useState<Libro[]>(arrayLibro);

  return {filteredLibros, setFilteredLibros};

}