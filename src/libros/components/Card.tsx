import { Link } from "react-router-dom";
import type { Libro } from "../../libros-data/libros";
import { BotonAdd } from "./BotonAdd";

interface Props {
  objLibro: Libro
}

export const Card = ({ objLibro }: Props) => {
  return(
    <div className="flex flex-col flex-1 libro-card">

      <Link
        to={`/detalle/${objLibro.id}`}
      >
        <img src={objLibro.url} alt={objLibro.title} />
      </Link>

      <h3>{objLibro.title}</h3>
      <h4>{objLibro.autor}</h4>
      <p>
        S/ {objLibro.price.toFixed(2)}
      </p> 

      {/* Boton Detalle */}
      <Link
        to={`/detalle/${objLibro.id}`}
        className="mb-2 bg-teal-300 text-gray-800 hover:bg-yellow-400 px-3 py-2 rounded-lg cursor-pointer"
      >
        Detalle
      </Link>

      {/* Boton carrito */}
      <BotonAdd objetoLibro={objLibro} />

    </div>
  
  );
}