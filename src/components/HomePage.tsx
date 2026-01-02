import { LibroList } from "../libros/components/LibroList";
import { CarritoCompra } from "./CarritoCompra";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const HomePage = () => {

  const {filteredLibros} = useContext(GlobalContext);

  return(
    <>
      <div className="flex">
        {/* Sidebar - carrito de compra */}
        <CarritoCompra />

        {/* Libros */}
        <main className="ml-80 flex-1 p-2">
          <LibroList matrizLibros={ filteredLibros } />
        </main>
 
      </div>
      
    </>     
  );
}