import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const urlProductos = 'http://localhost:3100/productos'

const Crear = () => {
    const [referencia, setReferencia] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [valor, setValor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [gama, setGama] = useState('')
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()

    producto = {
            referencia, nombre, cantidad, valor, categoria, gama, imagen
    }

    const crearProducto = async (e) => {
        e.preventDafault()
        await axios.post(urlProductos, producto);
        navigate('/productos')

    }

    
    return (
        <section className='container bg-warning p-5'>
            <form className='form-control p-5' action="">

                <section className='row'>
                    <section className='col'>
                        <input onChange={(e)=> setReferencia(e.target.value)} value={referencia} placeholder='Referencia' className='form-control' type="text" />
                        <input onChange={(e)=> setNombre(e.target.value)} value={nombre} placeholder='Nombre' className='form-control' type="text" />
                        <input onChange={(e)=> setDescripcion(e.target.value)} value={descripcion} placeholder='Descripcion' className='form-control' type="text" />
                        <input onChange={(e)=> setCantidad(e.target.value)} value={cantidad} placeholder='Cantidad' className='form-control' type="text" />
                    </section>
                    <section className='col'>
                        <input onChange={(e)=> setValor(e.target.value)} value={valor} placeholder='Valor ' className='form-control' type="text" />
                        <input onChange={(e)=> setCategoria(e.target.value)} value={categoria} placeholder='Categoria' className='form-control' type="text" />
                        <input onChange={(e)=> setGama(e.target.value)} value={gama} placeholder='Gama' className='form-control' type="text" />
                        <input onChange={(e)=> setImagen(e.target.value)} value={imagen} placeholder='Imagen' className='form-control' type="text" />
                    </section>
                </section>
                <section className='row'>
                    <Link to={'/productos'} className='btn btn-danger form-control m-2'>cancelar</Link>
                    <button onClick={crearProducto} className=' btn btn-success form-control m-2'>Guardar</button>
                </section>


            </form></section>
    )
}

export default Crear
