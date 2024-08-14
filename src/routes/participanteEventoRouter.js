
import { Router } from "express"
import { cadastrarParticipanteEvento} from "../controllers/participanteEventoController.js"

const router = Router()

router.post('/', cadastrarParticipanteEvento)

export default router

