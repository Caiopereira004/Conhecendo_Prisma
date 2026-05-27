const prisma = require("../data/prisma.js")

const listar = async (req,res) =>{
    const lista = await prisma.usuario.findMany();

    res.status(200).json(lista).end();
}

const cadastrar = async(req, res) =>{
    const {nome, senha, email, idade} = req.body;

    const item = await prisma.usuario.create({
        data:{
            nome,
            senha, 
            email,
            idade
        }
    })

    res.json(item).status(201).end();
}

const atualizar = async (req,res) =>{
    const {id} = req.params;
    const {nome, senha, email, idade} = req.body;

    const resultado = await prisma.usuario.update({
        where: {
            id: Number(id)
        },
        data: {
        nome,
        senha, 
        email,
        idade
        }
    })

    res.json(resultado).status(200).end();
}

const deletar = async (req,res) =>{
    const {id} = req.params;
    const {nome, email, senha, idade} = req.body;

    const resultado = await prisma.usuario.delete({
        where:{
        id: Number(id)
        }
    })

    res.json({msg: "Usuário deletado com sucesso!"}).status(204).end();
}

module.exports = {listar, cadastrar, atualizar, deletar};