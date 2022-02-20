import React, {useState} from 'react';
import './App.css';

import TodoList, {TaskType} from "./TodoList";
import {v1} from 'uuid';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "Angular", isDone: false},
        {id: v1(), title: "VUE", isDone: false},
        {id: v1(), title: "TS", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValueType>(`all`)

    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
        console.log(filter)
    }

    const getFilteredTasksForRender = () => {

        if (filter === "completed") {
            return tasks.filter(t => t.isDone === true)
        } else if (filter === "active") {
            return tasks.filter(t => t.isDone === false)
        } else {
            return tasks
        }
    }

    const filteredTasksForRender = getFilteredTasksForRender()

    return (

        <div className="App">

            <TodoList title={`what to learn?`}
                      tasksList={filteredTasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
            {/*<TodoList title={`2nd TodoList`} tasksList={tasks_2} />*/}
            {/*<TodoList title={`3d Todolist`} tasksList={tasks_3}  />*/}


        </div>


    );
}


export default App;


//     let   tasks_1 : TaskType[] = [
//     {id: 1, title: "HTML", isDone: false},
//     {id: 2, title: "CSS", isDone: true},
//     {id: 3, title: "JS", isDone: false}
// ];

// const tasks_2 : Array<TaskType> = [
//     {id: 1, title: "React", isDone: true},
//     {id: 2, title: "Angular", isDone: true},
//     {id: 3, title: "Vue", isDone: false},
// ];
// const tasks_3 : Array<TaskType> = [
//     {id: 1, title: "Yandex.Prekticum", isDone: true},
//     {id: 2, title: "Vladilen Inc.", isDone: true},
//     {id: 3, title: "IT-Insubator", isDone: false},
// ]
