//importação de dependencias
import "dotenv/config";
import express from "express"
import conn from './config/conn.js'

const PORT = process.env.PORT;
const app = express();

import palestranteRouter from './routes/palestranteRouter.js'
import eventoRouter from './routes/eventoRouter.js'
import participanteRouter from './routes/participanteRouter.js'
import feedbackRouter from './routes/feedbackRouter.js'
// import participanteEventoRouter from './routes/participanteEventoRouter.js'

import "./models/palestranteModel.js"
import "./models/eventoModel.js"
import "./models/participanteModel.js"
import "./models/feedbackModel.js"
// import "./models/participanteEventoModel.js"


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/eventos/palestrantes', palestranteRouter)
app.use('/eventos', eventoRouter)
app.use('/eventos/participantes', participanteRouter)
app.use('/eventos/feedback', feedbackRouter)
// app.use('/eventos/inscrever', participanteEventoRouter)

app.use("*", (req, res)=> {
    res.status(404).send({message: "Rota não encontrada"})
})

app.listen(PORT, ()=>{
    console.log("Server on http://localhost:" + PORT)
})