import express from 'express' 
import dotenv from 'dotenv'
import secRouter from  './routes/sec.routes.js'
import mozoRouter from  './routes/mozo.routes.js'

dotenv.config()

const app = express()

app.use(express.json());

const port = process.env.port

app.listen(port, () =>{
    console.log(`Servidor Levantado en el Puerto ${port}`)
})

app.use('/sec', secRouter)
app.use('/moz', mozoRouter)