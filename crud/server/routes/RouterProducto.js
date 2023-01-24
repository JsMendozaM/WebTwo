import express from 'express'
import { crearProducto, eliminarProducto, mostrarProducto, mostrarProductos, editarProducto } from '../controllers/ControllerProducto.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)
productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)
productoRouter.delete('/:id', eliminarProducto)
productoRouter.put('/:id', editarProducto)

export default productoRouter