import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
import { get_moz_byid } from "../utils/infomozo.js"
const fileMozos = await readFile('./Mozos.json', 'utf-8')
const mozoData = JSON.parse(fileMozos)

const  router = Router()

router.post('/infmozo',(req,res)=>{
    const id = req.body.id
    let aux_mozo = ''

    try{
        const arr = mozoData.filter(e => e.id == id)
        const result = arr.map(e=>{
            aux_sector = get_moz_byid(e.id)
            aux_mozo = aux_mozo.nombre
        return {
            id: e.id,
            nombre: aux_mozo
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