
import { Router } from "express"
import { criarEvento, getEventos, editEvento, deleteEvento } from "../controllers/eventoController.js"

const router = Router()

router.post('/criar', criarEvento)
router.get('/agenda', getEventos)
router.put(`/editar/:eventoId`, editEvento)
router.delete(`/cancelar/:eventoId`, deleteEvento)

export default router

