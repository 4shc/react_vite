import "./Card.css"
import { Link } from "react-router-dom"

function Card ({titulo = "titulo", descripcion = "descripcion"}){
  return( 
    <div className="card">
      <Link to = {titulo}>
        <h2>{titulo}</h2>
      </Link>
        <p>{descripcion}</p>
    </div>
  )
}

export default Card;







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