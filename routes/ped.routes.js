import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
import { get_ped_byid } from "../utils/infopedido.js"
const filepedido = await readFile('./Pedido.json', 'utf-8')
const pedidoData = JSON.parse(filepedido)

const  router = Router()

router.post('/infpedido',(req,res)=>{
    const estado = req.body.estado
    let aux_pedido = ''

    try{
        const arr = pedidoData.filter(e => e.estado == estado)
        const result = arr.map(e=>{
            aux_pedido = get_ped_byid(e.estado)
            aux_pedido = aux_pedido.estado
        return {
            Ocupadas: aux_pedido
        }
    })
    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${id} no existe`)
    }
    }catch(error){
        res.send(500).json('Error al Buscar...')
    }
})

//Abrir mesa

router.post('/abrirMesa', (req, res)=>{
    const mesa = req.body.newmesa
    pedidoData.push(ped)
    writeFile('./Pedido.json', JSON.stringify(pedidoData,null,2))
    res.status(200).json('Mesa Abierta')
}) 

export default router