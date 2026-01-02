import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const CarritoCompra = () => {

  const { carrito, eliminarLibroCarrito, totalPagar, limpiarCarrito  } = useContext(GlobalContext);
  
  const handlePagar = () => {
   alert("PEDIDO REALIZADO, EL PAGO ES SATISFACTORIO.");
   limpiarCarrito();
  };

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-80 bg-white border-r shadow-lg p-4 flex flex-col z-50">
      <h2 className="text-lg font-bold mb-4 text-black">Mi Carrito</h2>

      <div className="flex-1 overflow-y-auto text-black">
        {
          carrito.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No hay productos en tu carrito de compras.
            </p>
          ) : (
            <ul className="space-y-2">
              {carrito.map((libro) => (
                <li
                  key={libro.id}
                  className="flex justify-between items-center text-sm border-b pb-2"
                >
                  <span className="flex-1">
                    {libro.title} | <strong>CANTIDAD: {libro.quantity}</strong>
                     
                  </span>

                  <span className="ml-2 font-medium">
                    S/ {libro.subtotal.toFixed(2)}
                  </span>

                  <button
                    onClick={() => eliminarLibroCarrito(libro.id)}
                    className="bg-teal-300 text-gray-800 hover:bg-yellow-400 px-1 py-1 rounded-lg cursor-pointer ml-4"
                  >
                    Borrar
                  </button>
                </li>
              ))}
            </ul>
          )
        }
      </div>

      <div className="border-t pt-3 mt-3">
        <div className="text-right font-semibold text-lg mb-3 text-gray-800 ">
          Total: S/ {totalPagar.toFixed(2)}
        </div>

        <button
          onClick={handlePagar}
         className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          PAGAR
        </button>
      </div>
    </aside>
  );
};
