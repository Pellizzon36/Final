import { readFile } from 'fs/promises'
const filepedido = await readFile('./Pedido.json', 'utf-8')
const pedidoData = JSON.parse(filepedido)

export const get_ped_byid = (id)=>{
    return pedidoData.find(e => e.id == id)
}