import { useContext } from "react";
import type { Libro } from "../../libros-data/libros";
import { GlobalContext } from "../../context/GlobalContext";

interface Props {
  objetoLibro: Libro;
}

export const BotonAdd = ({objetoLibro}: Props) => {

  //recuperamos las variables
  const { agregaCarrito } = useContext(GlobalContext);

  const handAgregar = () => {
    agregaCarrito(objetoLibro);
  }

  return(
    <button
      onClick={handAgregar}
      className="bg-teal-300 text-gray-800 hover:bg-yellow-400 px-3 py-2 rounded-lg cursor-pointer"
    >
      Añadir Carrito
    </button>
  );
}