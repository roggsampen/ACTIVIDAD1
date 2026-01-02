import { useState } from "react";

export const useCarrito = () => {
  
  const [carrito, setCarrito] = useState([]);

  //Agregar libros al carrito
  const agregaCarrito = (objLibro) => {

    setCarrito((prev) => {
      
      //buscar si el libro ya existe y devueve su valor
      const existe = prev.find((item) => item.id === objLibro.id);

      if (existe) {
        //Si ya existe, no lo agrega y aumenta la cantidad en 1
        return prev.map((item) =>
          item.id === objLibro.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        );

      } else {
        //si no existe, lo agrega con la cantidad de 1
        return [...prev, { ...objLibro, quantity: 1 }];
      }

    })

  }

  //Aumenta la cantidad de una libro
  const incrementaCantidad = (id) => {

    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item }
      )
    );

  }
  
  //Para disminuir la cantidad de un libro especifico
  const decrementaCantidad = (id) => {

    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : { ...item }
        )
        .filter((item) => item.quantity > 0)
    );

  }

  // Para eliminar el libro del carrito
  const eliminarLibroCarrito = (id) => {
    setCarrito((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  //Halla el subtotal del libro
  const subtotalLibro = carrito.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  //calcula cantidad de todos los libros
  //devuelve como resultado un unico valor
  const totalLibros = subtotalLibro.reduce(
    (acc, item) => acc + item.quantity, 0
  );

  //calcula el total a pagar
  const totalPagar = subtotalLibro.reduce(
    (acc, item) => acc + item.subtotal, 0
  );

  //
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
