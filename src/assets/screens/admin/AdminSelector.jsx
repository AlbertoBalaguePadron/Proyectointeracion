import Cabecera from "../../components/header/Cabecera";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminSelector = ({ setEditarDescargar }) => {
  const setEditar_Descargar = (param) => {
    setEditarDescargar(param);
  };

  return (
    <div className="container">
      <Cabecera direcion={"/admin"} />

      <div className="bodySelector">
        <Link to="/admin/tables" className="QuitarEstiloEnlace">
          <Button className="elemento">Manage Tables</Button>
        </Link>

        <Link to="/admin/uploadfile" className="QuitarEstiloEnlace">
          <Button className="elemento">Upload Files</Button>
        </Link>

        <Link to="/admin/download" className="QuitarEstiloEnlace">
          <Button
            className="elemento"
            onClick={() => setEditar_Descargar("Descargar")}
          >
            Download Files
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminSelector;
