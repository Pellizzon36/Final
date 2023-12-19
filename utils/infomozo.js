import { readFile } from 'fs/promises'
const fileMozos = await readFile('./mozos.json', 'utf-8')
const mozoData = JSON.parse(fileMozos)

export const get_moz_byid = (id)=>{
    return secData.find(e => e.id === id)
}