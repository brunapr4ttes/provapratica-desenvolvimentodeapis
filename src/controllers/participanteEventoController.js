// import conn from "../config/conn.js";

// export const cadastrarParticipanteEvento = (request, response) =>{
//     const {participanteId, eventoId} = request.body

//     if(!participanteId){
//         response.status(500).json({message: "Participante é obrigatório"})
//         return
//     }if(!eventoId){
//         response.status(500).json({message: "Evento é obrigatório"})
//         return
//     }

//         const insertSql = /*sql*/ `INSERT INTO participanteEvento(participanteId, eventoId)
//         VALUES("${participanteId}","${eventoId}")`

//         conn.query(insertSql, (err)=>{
//             if(err){
//                 console.error(err)
//                 response.status(500).json({message: "Erro ao inscrever participante no evento"})
//                 return
//             }

//             response.status(201).json({message: "Participante inscrito!"})
//         })
    
// }