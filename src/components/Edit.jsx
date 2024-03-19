import React, { useState } from 'react'

export const EditToDoForm = ({ editToDo, task }) => {
    console.log(editToDo);
    console.log(typeof editToDo)
    console.log('task:', task);

    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {

        e.preventDefault();

        editToDo(value, task.id);
    }

  return (
    <>
        <form className=' TodoForm' onSubmit={handleSubmit}>
            <input type='text' className=' todo-input' placeholder='Edit Task' onChange={(e) => setValue(e.target.value)} value={value}/>  
            <button type='submit' className=' todo-btn'>Edit Task</button>  
        </form>    
    </>
  )
}

