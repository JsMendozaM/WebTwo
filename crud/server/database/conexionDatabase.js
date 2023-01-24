import {Sequelize} from 'sequelize'

const dataBase = new Sequelize('crudapi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default dataBase