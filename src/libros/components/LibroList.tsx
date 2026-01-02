import type { Libro } from "../../libros-data/libros";
import { Card } from "./Card";

interface Props {
  matrizLibros: Libro[]; //properties
}

export const LibroList = ({ matrizLibros }: Props) => {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        matrizLibros.map((obj) => (
          <Card key={obj.id} objLibro={obj}/>
        ))
      }
    </div>
  );
}