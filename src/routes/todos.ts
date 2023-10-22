import express from 'express';
import { Todo } from "../models/todo";


type RequestBody = { text: string};
type RequestParams = {todoId: string};


const router = express.Router();


let todos: Todo[] = [];


router.get('/',(req, res, next) =>{
    res.status(200).json({todos: todos});
});


router.post('/todo',(req, res, next) =>{
    const body = req.body as RequestBody;
    const newTodos: Todo = { id: new Date().toISOString(), text: body.text};
    todos.push(newTodos);
    res.status(201).json({message : 'Added Todo',todos: todos});
});




router.put('/todo/:todoId',(req, res, next) =>{
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;


    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0){
        todos[todoIndex] = { id: tid, text: body.text };
        return res.status(200).json({message: 'Update todo', todos: todos});
    }
    res.status(404).json({message: 'can not find todos'});
});


router.delete('/todo/:todoId',(req, res, next) =>{
    const params = req.params as RequestParams;
   
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0){
        todos = todos.filter(todoItem => todoItem.id !== tid);
        return res.status(200).json({message: 'Deleted todo', todos: todos});
    }
    return res.status(404).json({message: 'can not find todos'});
});


export default router;
