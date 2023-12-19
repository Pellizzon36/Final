import { readFile } from 'fs/promises'
const filepedido = await readFile('./pedido.json', 'utf-8')
const pedidoData = JSON.parse(filepedido)

export const get_moz_byid = (id)=>{
    return pedidoData.find(e => e.id === id)
}