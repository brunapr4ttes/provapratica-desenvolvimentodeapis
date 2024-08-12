import conn from '../config/conn.js'

const tableName = "palestrantes"

const tablePalestrantes = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        palestranteId varchar(60) primary key,
        nome varchar(255) not null,
        expertise varchar(255) not null,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`

conn.query(tablePalestrantes, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] tabela criada com sucesso`)
})