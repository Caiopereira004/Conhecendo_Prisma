const prisma = require("../data/prisma.js")

const listarP = async (req,res) =>{
    const lista = await prisma.pedido.findMany();

    res.status(200).json(lista).end();
}

const cadastrarP = async(req, res) =>{
    const {produto, usuarioId} = req.body;

    const item = await prisma.pedido.create({
        data:{
            produto,
            usuarioId 
        }
    })

    res.json(item).status(201).end();
}

const atualizarP = async (req,res) =>{
    const {id} = req.params;
    const {produto, usuarioId} = req.body;

    const resultado = await prisma.pedido.update({
        where: {
            id: Number(id)
        },
        data: {
            produto,
            usuarioId
        }
    })

    res.json(resultado).status(200).end();
}

const deletarP = async (req,res) =>{
    const {id} = req.params;
    const {produto, usuarioId} = req.body;

    const resultado = await prisma.pedido.delete({
        where:{
        id: Number(id)
        }
    })

    res.json({msg: "Usuário deletado com sucesso!"}).status(204).end();
}

module.exports = {listarP, cadastrarP, atualizarP, deletarP};