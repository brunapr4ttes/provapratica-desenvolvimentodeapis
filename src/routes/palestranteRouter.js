
import { Router } from "express"
import { cadastrarPalestrante, getPalestrantes } from "../controllers/palestranteController.js"

const router = Router()

router.post('/', cadastrarPalestrante)
router.get('/', getPalestrantes)

export default router

