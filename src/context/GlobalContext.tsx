import { createContext, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { useLibro } from "../hooks/useLibro";
import type { Libro } from "../libros-data/libros";
import { useBuscar } from "../hooks/useBuscar";
import { useCarrito } from "../hooks/useCarrito2";
import type { LibroCarrito } from "../hooks/useCarrito";

// interfaces
interface GlobalContextType  {
  libros: Libro[];
  filteredLibros: Libro[];
  setFilteredLibros: Dispatch<SetStateAction<Libro[]>>;

  carrito: LibroCarrito[];
  agregaCarrito: (libro: Libro) => void;
  eliminarLibroCarrito: (id: number) => void;
  incrementaCantidad: (id: number) => void;
  decrementaCantidad: (id: number) => void;
  limpiarCarrito: () => void;
  totalLibros: number;
  totalPagar: number;
}

interface GlobalProviderProps {
  children: ReactNode;
}
//--------------------

//valores iniciales
export const GlobalContext = createContext<GlobalContextType>({
  libros: [], 
  filteredLibros: [],
  setFilteredLibros: () => {},

  carrito: [],
  agregaCarrito: () => {},
  eliminarLibroCarrito: () => {},
  incrementaCantidad: () => {},
  decrementaCantidad: () => {},
  limpiarCarrito: () => {},
  totalLibros: 0,
  totalPagar: 0,
});
//--------------------

export const GlovalProvider = ({children}: GlobalProviderProps) => {

  const {
    libros
  } = useLibro();

  const { 
    filteredLibros,
    setFilteredLibros
  } = useBuscar();

  //carrito de compras
  const {
        carrito,
        agregaCarrito,
        eliminarLibroCarrito,
        incrementaCantidad,
        decrementaCantidad,
        limpiarCarrito,
        totalLibros,
        totalPagar,
    } = useCarrito();

  return (
    <GlobalContext.Provider
      value={ 
        {
          libros,
          filteredLibros,
          setFilteredLibros,

          carrito,
          agregaCarrito,
          eliminarLibroCarrito,  
          incrementaCantidad,
          decrementaCantidad,
          limpiarCarrito,
          totalLibros,
          totalPagar,
        } }
    >
      {children}
    </GlobalContext.Provider>
  );

}