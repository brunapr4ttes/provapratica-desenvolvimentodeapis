
import { Router } from "express"
import { criarFeedback } from "../controllers/feedbackController.js"

const router = Router()

router.post('/', criarFeedback)

export default router