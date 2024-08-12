//importação de dependencias
import "dotenv/config";
import express from "express"
import conn from './config/conn.js'

const PORT = process.env.PORT;
const app = express();

import palestranteRouter from './routes/palestranteRouter.js'

import "./models/palestranteModel.js"
import "./models/eventoModel.js"
import "./models/participanteModel.js"


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/eventos/palestrantes', palestranteRouter)

app.use("*", (req, res)=> {
    res.status(404).send({message: "Rota não encontrada"})
})

app.listen(PORT, ()=>{
    console.log("Server on http://localhost:" + PORT)
})