import { Router } from "express"
import { readFile, writeFile } from 'fs/promises'
import { get_sec_byid } from "../utils/infosectores.js"
const fileMozos = await readFile('./mozos.json', 'utf-8')
const mozoData = JSON.parse(fileMozos)

const  router = Router()

//info Mozo

router.post('/infomozo', async (req, res) => {
    const nombre = req.body.nombre;
    let aux_sector = ''

    try {
        const fileMozos = await readFile('./mozos.json', 'utf-8');
        const mozoData = JSON.parse(fileMozos);

        const arr = mozoData.filter(e => e.nombre === nombre);
        const result = arr.map(e => {
            aux_sector = get_sec_byid(e.mozos)
            aux_sector = aux_sector.sector
            return {
                id: e.id,
                nombre: e.nombre,
                sector: aux_sector
            };
        });
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: `${nombre} no existe` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



export default router