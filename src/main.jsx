import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import lenguajes from './datos/lenguajes.js'
// Importamos router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importamos VistasLenguajes
import VistasLenguajes from './vistas/VistasLenguajes.jsx'

const router = [
  {
    path: "/",
    element: <App />,
  },
];

lenguajes.forEach((len) => {
  router.push({
    path: len.ntitulo,
    element: <VistasLenguajes len = {len} />
  });
});

const routes = createBrowserRouter(router)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)










/* 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 
*/
