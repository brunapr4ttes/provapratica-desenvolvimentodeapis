import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid'

export const getEventos = (request, response) =>{
    const sql = /*sql*/ `SELECT * FROM eventos
    inner join palestrantes on eventos.palestranteId = palestrantes.palestranteId`

    conn.query(sql, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar eventos' })
            return
        }

        const eventos = data
        response.status(200).json(eventos)
    })

}

export const criarEvento = (request, response) => {
    const {titulo, dataEvento, palestranteId} = request.body
    if(!titulo){
        response.status(400).json({msg: "O título é obrigatório"})
        return
    }
    if(!dataEvento){
        response.status(400).json({msg: "A data do evento é obrigatória"})
        return
    }
    if(!palestranteId){
        response.status(400).json({msg: "O palestrante é obrigatório"})
        return
    }

    const checkSql= /*sql*/ `SELECT * FROM eventos WHERE ?? = ? AND ?? = ?`
    const checkSqlData=[
        "titulo",
        titulo,
        "dataEvento",
        dataEvento
    ]

    conn.query(checkSql, checkSqlData, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar evento'})
            return 
        }

        const eventoId = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO eventos(??, ??, ??, ??) VALUES (?, ?, ?, ?)`

        const insertSqlData = [
            "eventoId",
            "titulo",
            "dataEvento", 
            "palestranteId",

            eventoId,
            titulo,
            dataEvento,
            palestranteId
        ]
        conn.query(insertSql, insertSqlData, (err)=>{
            if (err) {
                console.error(err)
                response.status(500).json({ err: 'Não foi possível cadastrar evento'})
                return 
            } 
            response.status(201).json({msg: "Evento cadastrado com sucesso!"})
        })
    })
}