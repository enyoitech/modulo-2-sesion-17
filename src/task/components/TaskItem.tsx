import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../interfaces/interfaces';

interface IProps {
    task: Task
}

export const TaskItem = ({task}: IProps) => {

    const { toggleTaskState} = useContext(TaskContext);

    const handleDbClick= ()=> {
        
        console.log('handleDbClick', task.description)
        toggleTaskState(task.id)
    }

  return (
    <li  style={{
        cursor: 'pointer',
        textDecoration: task.completed? 'line-through': 'underline'
         }}
         
        onDoubleClick={handleDbClick}
    >
        {task.description}
    </li>
  )
}
