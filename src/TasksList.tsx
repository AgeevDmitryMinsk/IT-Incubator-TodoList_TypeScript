import React from 'react';
import Task from "./Task";
import {TaskType} from "./TodoList";
import {FilterValueType} from "./App";
import TodoListButtons from "./TodoListButtons";

type TaskListPropsType = {
    tasksList: TaskType[]
    removeTask: (taskID:string)=> void
    changeFilter: (filter: FilterValueType)=>void
};

const TasksList = (props: TaskListPropsType) => {
    //console.log(props.tasksList)// массив объектов
    const tasksComponentList = props.tasksList.map((task, index)=>{

        return <Task key={index} {...task} removeTask={props.removeTask} />
    })
    return (
        <div>
            <ul>
                {tasksComponentList}

            </ul>

                <TodoListButtons changeFilter={props.changeFilter}/>

        </div>
    );
};

export default TasksList;

//
// {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
// {/*<li> <input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span> </li>*/}
//
// {/*<Task id={props.tasksList[0].id}*/}
// {/*      title={props.tasksList[0].title}*/}
// {/*      isDone={props.tasksList[0].isDone} />*/}
// {/* можно эту запись сократить на такую (т.е. раскидай/деструктуризируй объект props.tasksList[0]):*/}
// {/*<Task {...props.tasksList[0]} />*/}
//
// {/*<li>*/}
// {/*    <input type="checkbox"*/}
// {/*           checked={props.task[1].isDone}/>*/}
// {/*    <span>{props.task[1].title}</span>*/}
// {/*</li>*/}
// {/*<Task id={props.tasksList[1].id} title={props.tasksList[1].title} isDone={props.tasksList[1].isDone} />*/}
// {/*<Task {...props.tasksList[1]} />*/}
//
// {/*<li>*/}
// {/*    <input type="checkbox"*/}
// {/*           checked={props.task[2].isDone}/>*/}
// {/*    <span>{props.task[2].title}</span>*/}
// {/*</li>*/}
// {/*<Task id={props.tasksList[2].id} title={props.tasksList[2].title} isDone={props.tasksList[2].isDone} />*/}
// {/*<Task {...props.tasksList[2]} />*/}
