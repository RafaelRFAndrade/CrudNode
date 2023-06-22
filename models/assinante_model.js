const Sequelize = require("sequelize");
const db = require("../config/connection");

const { DataTypes } = Sequelize;

const Assinante = db.define('assinantes', {
   cpf_assinante: {
      type: DataTypes.INTEGER,
      primaryKey: true
   },
   nome_assinante: {
      type: DataTypes.STRING(100)
   },
   email_assinante: {
      type: DataTypes.STRING(100)
   }
}, {
   timestamps: false,
   freezeTableName: true
});

module.exports = Assinante;
