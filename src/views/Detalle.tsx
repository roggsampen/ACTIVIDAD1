import { useParams } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { LibroDetalle } from "../components/LibroDetalle";

export const Detalle = () => {

  const { id } = useParams<{id: string}>();
  const { libros } = useContext(GlobalContext);
  
   
  const libro = libros.find(obj => obj.id === Number(id));

  if (!id) {
    return  <h2>Id no existe</h2>;
  }

  if (!libro) {
    return <h2>Libro no existe</h2>;
  }

  return (
    <LibroDetalle objetoLibro={libro} />
  );
}