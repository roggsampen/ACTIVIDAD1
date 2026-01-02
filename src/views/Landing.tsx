    import {Link} from "react-router-dom";
    import { useRedirection } from "../hooks/useRedirection";
   
    function Landing() {

        useRedirection("/relatos", 3000); // Redireccionamos a la vista de restaurantes en 3 segundos

        return (
            <div className="landing">
                <Link to={"/relatos"}> {/* Añadimos un enlace a la vista de restaurantes */}
                <h1>Bienvenidos a Nuestra Tienda Relatos de Papel</h1>
                </Link>

                <span className="laser-pointer"></span> {/* Puntero láser original */}
                <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
            </div>
        );
    }

    export default Landing;
