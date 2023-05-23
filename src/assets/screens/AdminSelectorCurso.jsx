import Cabecera from "./header/Cabecera.jsx";
import React from "react";
import { Link } from "react-router-dom";
import '../style/GlobalStyles.css';



const AdminSelectorCurso = ({ editarDescargar, enlace }) => {

  let url = "";
  if (enlace === "User") {

    url = "/Usuario/Select_Curso/"

  } else if (enlace === "Administrador") {

    if (editarDescargar === "Editar") {
      url = "/Administrador/Select/";

    } else if (editarDescargar === "Descargar") {
      url = "/Administrador/Select_Curso/";
    }

  }


  return (
    <div className="container">
      <Cabecera direcion={"/"+ enlace} />


      <div className="TextCenter"> Cursos</div>

      <div className="bodySelector">
        <Link to={url + "1"} className="QuitarEstiloEnlace">
          <div className="elemento">
            <p>1</p>
          </div>
        </Link>

        <Link to={url + "2"} className="QuitarEstiloEnlace" >
          <div className="elemento">
            <p>2</p>
          </div>
        </Link>

        <Link to={url + "3"} className="QuitarEstiloEnlace" >
          <div className="elemento">
            <p>3</p>
          </div>
        </Link>


        <Link to={url + "4"} className="QuitarEstiloEnlace" >
          <div className="elemento">
            <p>4</p>
          </div>
        </Link>

        <Link to={url + "5"} className="QuitarEstiloEnlace" >
          <div className="elemento">
            <p>5</p>
          </div>
        </Link>

        <Link to={url + "6"} className="QuitarEstiloEnlace" >
          <div className="elemento">
            <p>6</p>
          </div>
        </Link>

      </div>
    </div>
  )


}

export default AdminSelectorCurso; 