import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid'

export const criarFeedback = (request, response)=>{
    const {palestranteId, eventoId, nota, comentario} = request.body
    if(!palestranteId){
        response.status(400).json({msg: "O palestrante é obrigatório"})
        return
    }
    if(!eventoId){
        response.status(400).json({msg: "A evento é obrigatória"})
        return
    }
    if(!nota){
        response.status(400).json({msg: "A nota é obrigatória"})
        return
    }
    if(!comentario){
        response.status(400).json({msg: "O comentário é obrigatório"})
        return
    }

    const checkSql= /*sql*/ `SELECT * FROM feedback WHERE ?? = ? AND ?? = ?`
    const checkSqlData=[
        "nota",
        nota,
        "comentario",
        comentario
    ]

    conn.query(checkSql, checkSqlData, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar evento'})
            return 
        }

        const feedbackId = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO feedback(??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`

        const insertSqlData = [
            "feedbackId",
            "palestranteId",
            "eventoId",
            "nota", 
            "comentario",

            feedbackId,
            palestranteId,
            eventoId,
            nota,
            comentario
        ]
        conn.query(insertSql, insertSqlData, (err)=>{
            if (err) {
                console.error(err)
                response.status(500).json({ err: 'Não foi possível postar feedback'})
                return 
            } 
            response.status(201).json({msg: "Feedback postado com sucesso!"})
        })
    })
}