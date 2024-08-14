// import conn from '../config/conn.js'

// const tableName = "participanteEvento"

// const tableParticipanteEvento = /*sql*/`
//     CREATE TABLE IF NOT EXISTS ${tableName}(
//         participanteId varchar(255) not null,
//         eventoId varchar(255) not null,

//         foreign key (participanteId) references participantes(participanteId),
//         -- foreign key (eventoId) references eventos(eventoId),

//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//     )
// `

// conn.query(tableParticipanteEvento, (err)=> {
//     if(err){
//         console.error(err)
//         return
//     }

//     console.log(`[${tableName}] tabela criada com sucesso`)
// })