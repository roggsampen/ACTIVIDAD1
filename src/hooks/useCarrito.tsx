import { useState } from "react";

// Libro base
export interface Libro {
  id: number;
  title: string;
  autor: string;
  url: string;
  price: number;
}

// Libro dentro del carrito (estado base)
type LibroCarritoBase = Libro & {
  quantity: number;
};

// Libro dentro del carrito con subtotal calculado
export interface LibroCarrito extends LibroCarritoBase {
  subtotal: number;
}

export const useCarrito = () => {

  // Estado del carrito
  const [carrito, setCarrito] = useState<LibroCarritoBase[]>([]);

  // Agregar libros al carrito
  const agregaCarrito = (objLibro: Libro) => {

    setCarrito((prev) => {
      
      // Buscar si el libro ya existe y devuelve su valor
      const existe = prev.find((item) => item.id === objLibro.id);

      if (existe) {
        // Si ya existe, no lo agrega y aumenta la cantidad en 1
        return prev.map((item) =>
          item.id === objLibro.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

      } else {
        // Si no existe, lo agrega con la cantidad de 1
        return [...prev, { ...objLibro, quantity: 1 }];
      }

    });

  };

  // Aumenta la cantidad de un libro
  const incrementaCantidad = (id: number) => {

    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };
  
  // Para disminuir la cantidad de un libro especifico
  const decrementaCantidad = (id: number) => {

    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  // Para eliminar el libro del carrito
  const eliminarLibroCarrito = (id: number) => {
    setCarrito((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Halla el subtotal del libro (costo)
  const subtotalLibro: LibroCarrito[] = carrito.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  // Calcula cantidad de todos los libros
  // Devuelve como resultado un unico valor
  const totalLibros = subtotalLibro.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Calcula el total a pagar
  const totalPagar = subtotalLibro.reduce(
    (acc, item) => acc + item.subtotal,
    0
  );

  // Limpia todo el carrito
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return {
    carrito: subtotalLibro,
    agregaCarrito,
    incrementaCantidad,
    decrementaCantidad,
    eliminarLibroCarrito, 
    totalLibros,
    totalPagar,
    limpiarCarrito, 
  };
};
