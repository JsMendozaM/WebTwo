import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const urlProductos = 'http://localhost:3100/productos'


export const ListadoProducto = () => {

  const [productos, setProductos] = useState([])
  useEffect(()=> {
    mostrarProductos()

  },[]) /* <-- los corchete dentro del parentesis es para dejar de que cargue solo */    
  
  const mostrarProductos = async () => {
      const res = await axios.get(urlProductos)
      setProductos (res.data)
      console.log(res.data)
  }
/* 
  async function mostrarProductos (){

  } */

  const eliminarProducto = async (id) => {
      await axios.delete(`${urlProductos}/${id}`)
      mostrarProductos()
  }

  return (
   <section className='container mt-5'>
    <Link to={'/crear'} className='btn btn-success form-control'>Crear producto </Link> 
       <table className='table table-striped text-center'>
        <thead>
            <tr>
                <td>Acciones</td>
                <td>Referencia</td>
                <td>Nombre</td>
                <td>Descripcion</td>
                <td>Cantidad</td>
                <td>Valor</td>
                <td>Categoria</td>
                <td>Gama</td>
                <td>Imagen</td>
            </tr>
        </thead>
        <tbody>
            {
              productos.map((producto)=>(
                    <tr>
                        <td>
                          <button onClick={()=> eliminarProducto(producto.id) } className='btn btn-danger form-control'>
                            Eliminar
                          </button>
                        </td>
                        <td>{producto.referencia}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.valor}</td>
                        <td>{producto.categoria}</td>
                        <td>{producto.gama}</td>
                        <td className='imagen'><img src={`$producto.imagen`} atl="logo" /></td>
                    </tr>
              ))    
            }
        </tbody>
       </table>
   </section>
  )
}


export default ListadoProducto