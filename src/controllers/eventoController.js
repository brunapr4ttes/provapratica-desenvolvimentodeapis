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

export const editEvento = (request, response) => {
    
    const {eventoId} = request.params;

    try{

        const {titulo, dataEvento, palestranteId} = request.body;

        if(!titulo){
            return response.status(400).json({message: "O título é obrigatorio!"});
        }

        if(!dataEvento){
            return response.status(400).json({message: "A data é obrigatorio!"});
        }

        if(!palestranteId){
            return response.status(400).json({message: "O palestrante é obrigatorio!"});
        }

        const checkSQL = /*sql*/`
            SELECT * FROM eventos
            WHERE ?? = ?
        `
        const checkData = ['eventoId', eventoId];

        conn.query(checkSQL, checkData, (err, data) => {
            if(err){
                console.error(err)
                return response.status(500).json({err: "Erro ao localizar o evento!"})
            }

            if(data.length == 0) {
                response.status(404).json({message: "evento não encontrado"});
            }
    

                const updateSQL = /*sql*/ `
                    UPDATE eventos
                    SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?
                `
                const updateData = ["titulo", titulo, "dataEvento", dataEvento ,"palestranteId",  palestranteId, "eventoId", eventoId];
                conn.query(updateSQL, updateData, (err) => {
                    if(err){
                        console.error(err)
                        return response.status(500).json({err: "Erro ao localizar o evento!"})
                    }

                    response.status(200).json({message: "Evento atualizado!"})
                })
            })
        } catch (error) {
            console.error(error)
            response.
                status(error.status || 500).
                json({
                    message: error.message || "Erro interno no servidor"
                });
            return
        }
}
    
export const deleteEvento = (request, response) =>{
    const {eventoId} = request.params


    const deleteFeedbackSql = /*sql*/ `DELETE FROM feedback WHERE eventoId = "${eventoId}"`
    
    conn.query(deleteFeedbackSql, (err, info)=>{
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao deletar feedback"})
            return  
        }
    })

    const deleteSql = /*sql*/ `DELETE FROM eventos WHERE eventoId = "${eventoId}"`
    
    conn.query(deleteSql, (err, info)=>{
        if(err){
            console.error(err)
            response.status(500).json({message: "Erro ao deletar evento"})
            return  
        }

        if(info.affectedRows === 0){
            response.status(404).json({message: "Evento não encontrado"})
            return
        }

        response.status(200).json({message: "Evento Selecionado foi deletado"})
    })
}