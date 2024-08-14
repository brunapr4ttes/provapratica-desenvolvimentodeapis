
import { Router } from "express"
import { cadastrarParticipante, getParticipantes } from "../controllers/participanteController.js"

const router = Router()

router.post('/', cadastrarParticipante)
router.get('/', getParticipantes)

export default router

