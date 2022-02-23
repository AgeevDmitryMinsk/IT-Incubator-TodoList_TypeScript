// rsc
import React from 'react';
import TodoListHeader from "./TodoListHeader";

import TasksList from "./TasksList";
import AddTaskForm from "./AddTaskForm";
import {FilterValueType} from "./App";

type TodoListPropsType = {
    title: string,
    tasksList: TaskType[] // список дел tasksList = массив по типу TaskType
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    filter: FilterValueType
}

export type TaskType = { // в каждом списке дел есть:
    id: string,          // порядковый номер дела id,
    title: string,       // название дела title
    isDone: boolean      // выполено ли дело isDone
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            {/*<h3>What to learn</h3>*/}
            {/*<h3>{props.title}</h3>*/}
            <TodoListHeader title={props.title}/>

            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <AddTaskForm addTask={props.addTask}
                // setTitle={props.setTitle}
            />


            < TasksList tasksList={props.tasksList}
                        removeTask={props.removeTask}
                        changeFilter={props.changeFilter}
                        changeTaskStatus={props.changeTaskStatus}
                        filter={props.filter}
            />


        </div>
    )
};

export default TodoList;

//
// {/*<ul>*/}
// {/*    /!*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*!/*/}
// {/*    /!*<li> <input type="checkbox" checked={props.task[0].isDone}/> <span>{props.task[0].title}</span> </li>*!/*/}
//
// {/*    /!*<Task id={props.tasksList[0].id}*!/*/}
// {/*    /!*      title={props.tasksList[0].title}*!/*/}
// {/*    /!*      isDone={props.tasksList[0].isDone} />*!/*/}
// {/*    /!* можно эту запись сократить на такую (т.е. раскидай/деструктуризируй объект props.tasksList[0]):*!/*/}
// {/*    <Task {...props.tasksList[0]} />*/}
//
// {/*    /!*<li>*!/*/}
// {/*    /!*    <input type="checkbox"*!/*/}
// {/*    /!*           checked={props.task[1].isDone}/>*!/*/}
// {/*    /!*    <span>{props.task[1].title}</span>*!/*/}
// {/*    /!*</li>*!/*/}
// {/*    /!*<Task id={props.tasksList[1].id} title={props.tasksList[1].title} isDone={props.tasksList[1].isDone} />*!/*/}
// {/*    <Task {...props.tasksList[1]} />*/}
//
// {/*    /!*<li>*!/*/}
// {/*    /!*    <input type="checkbox"*!/*/}
// {/*    /!*           checked={props.task[2].isDone}/>*!/*/}
// {/*    /!*    <span>{props.task[2].title}</span>*!/*/}
// {/*    /!*</li>*!/*/}
// {/*    /!*<Task id={props.tasksList[2].id} title={props.tasksList[2].title} isDone={props.tasksList[2].isDone} />*!/*/}
// {/*    <Task {...props.tasksList[2]} />*/}
//
// {/*</ul>*/}
