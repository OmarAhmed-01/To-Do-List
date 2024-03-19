//imports
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

//pages
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo';
import { EditToDoForm } from './Edit';


uuidv4();

export const ToDoWrapper = () => {
    const [Todo, setToDo] = useState([]);
    const [deletedTodoId, setDeletedTodoId] = useState(null);
    const [newToDoId, setNewToDoId] = useState(null);


    const addToDo = (todo) => {
        const newToDo = {id: uuidv4(), task: todo, completed: false, isEditing: false};
        setToDo([...Todo, newToDo]) 
        setNewToDoId(newToDo.id);

        setTimeout(() => {
            setNewToDoId(null);
        }, 500)
    }

    const toggleComplete = (id) => {
        setToDo(Todo.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo
            )
        );
    }

    const deleteToDo = (id) => {
        setDeletedTodoId(id);
        setTimeout(() => {
            setToDo(Todo.filter((todo) => todo.id !== id));
            setDeletedTodoId(null);
        }, 500);
    }

    const editToDo = (id) => {
        setToDo(
            Todo.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo)
        );
    }

    const editTask = (task, id) => {
        setToDo(
            Todo.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo )
        );
    }
  return (
    <div className=' TodoWrapper'>
        <h1>Do Something!</h1>
        <ToDoForm addTodo={addToDo}/>
        {
            Todo.map((todo) => (
                <div key={todo.id} className={`${deletedTodoId === todo.id ? 'slide-left' : ''} ${newToDoId === todo.id ? 'slide-right' : ''} `}>
                    {todo.isEditing ? <EditToDoForm editToDo={editTask} task={todo} />:<ToDo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo}/>}
                </div>
            ))
        }
    </div>
  )
}
