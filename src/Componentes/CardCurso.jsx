import "./Card.css"
import "./CardCurso.css"
import { Link } from "react-router-dom"

function CardCursos ({TipoLenguaje = "TipoLenguaje", NombreCurso = "NombreCurso", Instructor = "Instructor" }){
  return( 
    <div className="card card-cursos">
      <Link to = {TipoLenguaje}>
        <h2>{TipoLenguaje}</h2>
      </Link>
        <p>{NombreCurso}</p>
        <p>{Instructor}</p>
    </div>
  )
}

export default CardCursos;







/* 
import "../Componentes/Card.css"

function Card (props){
  return( 
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
    </div>
  )
}

export default Card; 
*/