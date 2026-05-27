const express = require("express");

const route = express.Router();

const {listarP, cadastrarP, atualizarP, deletarP} = require("../controllers/pedido.controller.js");

route.get("/listar", listarP);
route.post("/cadastrar", cadastrarP);
route.put("/atualizar/:id", atualizarP);
route.delete("/deletar/:id", deletarP);

module.exports = route;