import { useEffect, useState } from "react"
import { arrayLibro, type Libro} from "../libros-data/libros";

export const useLibro = () => {
  
  const [libros, setLibros] = useState<Libro[]>([]);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLibros(arrayLibro);
    }, 1000);

    //limpia cuando el componente se desmonta o cuando el useEffect se vuelve a ejecutar
    return () => clearTimeout(timer);

  }, []);

  return {libros};

}