/*Espera-se que a solução do domínio de problema compreenda:
  assincronicidade, tratamento de exceção, mapeamento de objeto relacional 
  (ORM) e banco de dados. A solução servidora tem que permitir o acesso via 
  API por meio dos métodos de um cliente REST qualquer.

 desenvolver uma API em nodejs que contenha as operações CRUD para manipular 
dados de assinantes de um jornal: cpf_assinante, nome_assinante e
 email_assinante. Além do CRUD para assinante, implemente um end-point 
 (rota) para a busca por nome_assinante. */

 const Sequelize = require("sequelize");

 const db = new Sequelize('assinante', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
 });
 
 module.exports = db;
 
