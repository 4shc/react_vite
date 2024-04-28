import './App.css'
import Card from './Componentes/Card'
import CardCursos from './Componentes/CardCurso'
// Importamos nuestro Json con nuestros datos
import lenguajes from './datos/lenguajes.js'
import cursos from './datos/cursos.js'

function App() {

const ListasLenguajes = lenguajes.map((l, index) =>{
  return <Card key = {index} titulo = {l.ntitulo} descripcion = {l.ndescripcion}/>
})

const ListasCursos = cursos.map((l, index) =>{
  return <CardCursos key = {index} TipoLenguaje = {l.nTipoLenguaje} NombreCurso = {l.nNombreCurso} Instructor = {l.nInstructor}  />
})

  return (
    <div className="app">
      <h1>React - Ejercicio Cards</h1>
      <div className="container">
        {ListasLenguajes}
      </div>
      <h1>React - Actividad 🧙‍♂️</h1>
      <div className="container">
        {ListasCursos}
      </div>
    </div>

  )
}

export default App
