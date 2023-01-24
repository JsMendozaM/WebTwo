import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Producto = dataBase.define('productos', {
  referencia: {
    type: DataTypes.STRING
  }, 
  nombre: {
    type: DataTypes.STRING
  }, 
  descripcion: {
    type: DataTypes.STRING
  }, 
  cantidad: {
    type: DataTypes.STRING
  }, 
  valor: {
    type: DataTypes.STRING
  },
  categoria:{
    type: DataTypes.STRING
  },
  gama: {
    type: DataTypes.STRING
  },
  imagen: {
    type: DataTypes.STRING
  }
})

export default Producto