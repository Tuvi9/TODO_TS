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

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
      const todoId = req.params.id;
      const updatedTask = (req.body as {task: string}).task;
      const todoIndex = todos.findIndex(todo => todo.id === todoId);

      if(todoIndex < 0) {
        throw new Error('Could not find todo with that id')
      }

      todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask);
        res.status(201).json({
            message: 'Todo is updated!',
            updatedTodo: todos[todoIndex]
        })
    } catch(error) {
        console.log(error)
    }
}

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
      const todoId = req.params.id;
      const todoIndex = todos.findIndex(todo => todo.id === todoId);

      if(todoIndex < 0) {
        throw new Error('Could not find todo with that id')
      }

      // Starts at todoIndex and removes 1 item
      todos.splice(todoIndex, 1);

      res.status(201).json({
        message: 'Successfully deleted todo'
      })
    } catch(error) {
        console.log(error)
    }
}