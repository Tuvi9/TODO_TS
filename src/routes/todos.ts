import { Router } from "express";
import { createTodo } from "../controllers/todos";

const router = Router();

// Handle routes here
router.post('/', createTodo)
router.get('/')
router.patch('/:id')
router.delete('/:id')

export default router;