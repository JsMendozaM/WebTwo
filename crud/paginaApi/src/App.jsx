import ListadoProducto from "./components/productos/ListadoProducto"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404";
import Crear from "./components/productos/Crear";


const router = createBrowserRouter([
  {
    path: '/productos',
    element: <ListadoProducto />,
    errorElement: <Error404 />
    
  },
  {
    path: '/',
    element: <h1>Home</h1>,
    errorElement: <Error404 />
  },
  {
    path: '/crear',
    element: <Crear />,
    errorElement: <Error404 />
  }
]);

function App() {
 
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
