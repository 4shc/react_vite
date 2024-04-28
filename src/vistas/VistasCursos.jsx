import React from "react"
import "./VistasLenguajes.css"
import "./VistasCursos.css"

function VistasCursos({len}) {
  return(
    <div className="len-vista vista-cursos">
      <h1>{len.nTipoLenguaje}</h1>
      <h2>{len.nNombreCurso}</h2>
      <h3>{len.nInstructor}</h3>
      <iframe width="430" height="280" src={len.nCurso} title={len.nNombreCurso} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VistasCursos


