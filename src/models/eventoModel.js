import conn from '../config/conn.js'

const tableName = "eventos"

const tableEventos = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        eventoId varchar(60) primary key,
        titulo varchar(80) not null,
        dataEvento varchar(255) not null,
        palestranteId varchar(255) not null,

        foreign key (palestranteId) references palestrantes(palestranteId),

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`

conn.query(tableEventos, (err)=> {
    if(err){
        console.error(err)
        return
    }

    console.log(`[${tableName}] tabela criada com sucesso`)
})