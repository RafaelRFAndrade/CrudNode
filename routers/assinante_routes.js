const express = require("express");
const { getAssinantes, createAssinante, deleteAssinante, updateAssinante,getAssinantePorNome } = require("../controller/assinante_controller");

const routes = express.Router();

routes.get('/assinante', getAssinantes);
routes.post('/assinante', createAssinante);
routes.put('/assinante/:cpf', updateAssinante);
routes.delete('/assinante/:cpf', deleteAssinante);
routes.get('/assinante/nome/:nome', getAssinantePorNome);

module.exports = routes;
