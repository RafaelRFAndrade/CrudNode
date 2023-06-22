const Assinante = require("../models/assinante_model");

// Busca assinantes na tabela 'assinantes' (READ)
exports.getAssinantes = async (req, res) => {
   try {
      const assinantes = await Assinante.findAll();
      res.send(assinantes);
   } catch (e) {
      console.log("Erro ao buscar tabela", e);
   }
}

// Inserir registro (CREATE)
exports.createAssinante = async (req, res) => {
   try {
      await Assinante.create(req.body);
      res.json({
         "message": "Registro inserido com sucesso"
      });
   } catch (e) {
      console.log("Erro ao inserir", e);
   }
}

// Atualizar registro (UPDATE)
exports.updateAssinante = async (req, res) => {
   try {
      await Assinante.update(req.body, {
         where: {
            cpf_assinante: req.params.cpf
         }
      });
      res.json({
         "message": "Assinante " + req.params.cpf + " foi atualizado"
      });
   } catch (e) {
      console.log("Erro no UPDATE", e);
   }
}

// Deletar registro (DELETE)
exports.deleteAssinante = async (req, res) => {
   try {
      await Assinante.destroy({
         where: {
            cpf_assinante: req.params.cpf
         }
      });
      res.json({
         "message": "Assinante " + req.params.cpf + " foi deletado"
      });
   } catch (e) {
      console.log("Não foi possível excluir", e);
   }
}


//Busca assinante pelo nome

exports.getAssinantePorNome = async (req, res) => {
   try {
      const nome = req.params.nome;
      const assinante = await Assinante.findOne({
         where: {
            nome_assinante: nome
         }
      });
      if (assinante) {
         res.send(assinante);
      } else {
         res.status(404).json({
            message: "Assinante não encontrado"
         });
      }
   } catch (e) {
      console.log("Erro ao buscar assinante por nome", e);
      res.status(500).json({
         message: "Erro ao buscar assinante por nome"
      });
   }
}
