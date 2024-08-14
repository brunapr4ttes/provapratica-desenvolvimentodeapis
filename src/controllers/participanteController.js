import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid'

export const getParticipantes = (request, response) =>{
    const sql = /*sql*/ `SELECT * FROM participantes`
    conn.query(sql, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar participantes' })
            return
        }

        const participantes = data
        response.status(200).json(participantes)
    })

}

export const cadastrarParticipante = (request, response) =>{
    const {nome, email} = request.body

    if(!nome){
        response.status(500).json({message: "Nome do funcionário é obrigatório"})
        return
    }if(!email.includes('@')){
        response.status(500).json({message: "email do funcionário é obrigatório"})
        return
    }

        const checkSql = /*sql*/ `
    SELECT * FROM participantes
    WHERE email = "${email}"
    `
    
    conn.query(checkSql, (err, data)=>{
        if(err){
            console.error(err)
            response.status(500).json({message: "Não foi possível verificar se o participante possuí registro"})
            return
        }
        if(data.length > 0){
            response.status(409).json({message: "Participante já cadastrado com esse email"})
            return
        }

        const participanteId = uuidv4()

        const insertSql = /*sql*/ `INSERT INTO participantes(participanteId, nome, email)
        VALUES("${participanteId}","${nome}","${email}")`

        conn.query(insertSql, (err)=>{
            if(err){
                console.error(err)
                response.status(500).json({message: "Erro ao cadastrar participante"})
                return
            }

            response.status(201).json({message: "Participante cadastrado!"})
        })
    })
}