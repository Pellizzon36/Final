import { readFile } from 'fs/promises'
const fileSector = await readFile('./Sectores.json', 'utf-8')
const secData = JSON.parse(fileSector)

export const get_sec_byid = (id)=>{
    return secData.find(e => e.id === id)
}