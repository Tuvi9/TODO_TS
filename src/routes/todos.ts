import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todos";

const router = Router();

// Handle routes here
router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id')
router.delete('/:id')

export default router;