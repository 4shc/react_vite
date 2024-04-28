import React from "react"
import "./VistasLenguajes.css"

function VistasLenguajes({len}) {
  return(
    <div className="len-vista">
      <h1>{len.ntitulo}</h1>
      <p>{len.ndescripcion}</p>
      <p><img src={len.imagen} alt={len.imagen + "imagen"} /></p>
    </div>
  )
}

export default VistasLenguajes