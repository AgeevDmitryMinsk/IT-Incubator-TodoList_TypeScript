import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask: (taskID:string)=> void
}

const Task = (props: TaskPropsType) => {

    function onClickRemoveButtonHandler() {
        props.removeTask(props.id)
    }

    return (
        <li>
            <button onClick={onClickRemoveButtonHandler}>X</button>
            <input type="checkbox" checked={props.isDone} onChange={()=>{console.log(`input checkbox clicked`)}}/>
            <span>{props.title}</span>
        </li>
    );
};

export default Task;
