import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos";

const router = Router();

// Handle routes here
router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router;