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