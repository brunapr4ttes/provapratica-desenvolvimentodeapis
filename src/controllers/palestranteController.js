import conn from "../config/conn.js";
import {v4 as uuidv4} from 'uuid'

export const getPalestrantes = (request, response) =>{
    const sql = /*sql*/ `SELECT * FROM palestrantes`
    conn.query(sql, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar palestrantes' })
            return
        }

        const palestrantes = data
        response.status(200).json(palestrantes)
    })

}

export const cadastrarPalestrante = (request, response) =>{
    const {nome, expertise} = request.body
    if(!nome){
        response.status(400).json({msg: "O nome é obrigatório"})
        return
    }
    if(!expertise){
        response.status(400).json({msg: "A expertise é obrigatória"})
        return
    }

    const checkSql= /*sql*/ `SELECT * FROM palestrantes WHERE ?? = ? AND ?? = ?`
    const checkSqlData=[
        "nome",
        nome,
        "expertise",
        expertise
    ]

    conn.query(checkSql, checkSqlData, (err, data)=>{
        if (err) {
            console.error(err)
            response.status(500).json({ err: 'Não foi possível buscar palestrante'})
            return 
        }

        const palestranteId = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO palestrantes(??, ??, ??) VALUES (?, ?, ?)`

        const insertSqlData = [
            "palestranteId",
            "nome",
            "expertise", 

            palestranteId,
            nome,
            expertise
        ]
        conn.query(insertSql, insertSqlData, (err)=>{
            if (err) {
                console.error(err)
                response.status(500).json({ err: 'Não foi possível cadastrar palestrante'})
                return 
            } 
            response.status(201).json({msg: "Palestrante cadastrado com sucesso!"})
        })
    })
}