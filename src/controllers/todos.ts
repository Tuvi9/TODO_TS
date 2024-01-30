import { Request, Response, NextFunction } from 'express';
import { Todo } from '../models/todo';
import { todo } from 'node:test';

const todos: Todo[] = [];

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
        // POST Request body: {task: string}
        const task = (req.body as {task: string}).task
        const newTodo = new Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new todo',
            createdTask: newTodo
        })
    // If error, log error
    } catch (error) {
        console.log(error)
    }
}

// Send GET request as A tasks to todos array.
export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    try{
        res.status(201).json({
            tasks: todos
        })
    } catch(error) {
        console.log(error)
    }
}