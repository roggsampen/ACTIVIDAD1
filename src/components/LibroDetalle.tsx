import { useNavigate } from "react-router";
import type { Libro } from "../libros-data/libros";

interface Props {
  objetoLibro: Libro;
}

export const LibroDetalle = ({objetoLibro}: Props) => {

    const navigate = useNavigate();

    return(
      <div>
        <div className="w-full flex justify-center">
          <img
           src={objetoLibro.url} alt={objetoLibro.title}
           className="w-xs"
          />
        </div>

        <h1 className="text-yellow-800">{objetoLibro.title}</h1>
        <p className="pl-10 text-white">{objetoLibro.autor}</p>
        <p className="pl-10 pb-8 text-white">
          S/ {objetoLibro.price.toFixed(2)}
        </p>

        <h2 className="pl-10 text-white">Reseña</h2>
        <p className="pl-10 pr-10">
          Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias. 
          Pasando a la década de 1960, el Lorem Ipsum fue popularizado por el fabricante de tipografía Letraset, que lo utilizó en sus campañas publicitarias.
        </p>

        <div className="pl-10 pr-10 pb-50 mt-6 flex justify-between">

          {/* Botón Atras*/}
          <button onClick={() => navigate(-1)}
            className="bg-teal-300 text-gray-800 hover:bg-yellow-400 px-3 py-2 rounded-lg cursor-pointer"
          >
            Atras
          </button>

        </div>
      </div>
    );
}