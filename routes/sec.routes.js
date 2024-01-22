import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
import { get_sec_byid } from "../utils/infosectores.js"
const fileSector = await readFile('./sectores.json', 'utf-8')
const secData = JSON.parse(fileSector)

const  router = Router()



router.post('/infsector',(req,res)=>{
    const id = req.body.id
    let aux_sector = ''

    try{
        const arr = secData.filter(e => e.id == id)
        const result = arr.map(e=>{
            aux_sector = get_sec_byid(e.id)
            aux_sector = aux_sector
        return {
            id: e.id,
            sector: aux_sector,
            mesas: e.mesas,
            Ocupadas: e.ocupacion
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



export default router