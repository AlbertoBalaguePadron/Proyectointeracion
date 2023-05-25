import Cabecera from "../../screens/header/Cabecera";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const AdministradorSelector = ({ setEditarDescargar }) => {

    const setEditar_Descargar = (param) => {
        setEditarDescargar(param)
    };

    return (
        <div className="container">
            <Cabecera direcion={"/administrador"} />

            <div className="bodySelector">
                <Link to="/administrador/tablas" className="QuitarEstiloEnlace">
                <Button className="elemento">
                        Administrar Tablas
                    </Button>
                </Link>

                <Link to="/administrador/subir_Archivo" className="QuitarEstiloEnlace" >

                    <Button className="elemento">
                        Subir Archivo
                    </Button>
                </Link>

                <Link to="/administrador/select" className="QuitarEstiloEnlace" >

                    <Button className="elemento" onClick={() => setEditar_Descargar("Descargar")}>
                        Download File
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default AdministradorSelector; 