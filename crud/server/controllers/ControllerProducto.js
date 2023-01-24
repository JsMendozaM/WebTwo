import Producto from "../models/ModelProducto.js";
import { check, validationResult } from "express-validator";

const crearProducto = async (req, res) => {
  try {
    await Producto.create(req.body);
    res.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    res.send({
      message: `No se pudo registrar el usuario: ${error}`,
    });
  }
};

async function mostrarProductos(req, res) {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.json({
      message: "Base de datos vacia",
    });
  }
}

const mostrarProducto = async (req, res) => {
  try {
    const productos = await Producto.findOne({
      where: { id: req.params.id },
    });
    res.json(productos);
  } catch (error) {
    res.json({
      message: "No existe el registro en la base de datos",
    });
  }
};

const editarProducto = async (req, res) => {
  try {
    await Producto.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro Actualizado correctamente",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

async function eliminarProducto(req, res) {
  try {
    await Producto.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Resgistro eliminado correctamente",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export {
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  eliminarProducto,
  editarProducto,
};
