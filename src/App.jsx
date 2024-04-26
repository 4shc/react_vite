import './App.css'
import Card from './Componentes/Card'
// Importamos nuestro Json con nuestros datos
import lenguajes from './datos/lenguajes'

function App() {

const ListasLenguajes = lenguajes.map((l, index) =>{
  return <Card key = {index} titulo = {l.ntitulo} descripcion = {l.ndescripcion}/>
})


  return (
    <div className="app">
      <h1>React - Ejercicio Cards</h1>
      <div className="container">
        {ListasLenguajes}
      </div>
    </div>

  )
}

export default App
