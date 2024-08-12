import conn from '../config/conn.js'

const tableName = "participantes"

const tableParticipantes = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        participanteId varchar(60) primary key,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`

conn.query(tableParticipantes, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] tabela criada com sucesso`)
})