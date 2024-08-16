// { "participanteId": 2, "eventoId": 1, "nota": 5, "comentario": "Excelente evento!" }

import conn from '../config/conn.js'

const tableName = "feedback"

const tableEventos = /*sql*/`
    CREATE TABLE IF NOT EXISTS ${tableName}(
        feedbackId varchar(60) primary key,
        palestranteId varchar(255) not null,
        eventoId varchar(255) not null,
        nota varchar(1) not null,
        comentario varchar(300) not null,

        foreign key (palestranteId) references palestrantes(palestranteId),
        foreign key (eventoId) references eventos(eventoId),

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