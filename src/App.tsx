import React, {useState} from 'react';
import './App.css';

import TodoList, {TaskType} from "./TodoList";
import {v1} from 'uuid';


export type FilterValueType = 'all' | 'active' | 'completed'
type todoListsType = {
	id: string
	titleTL: string
	filterTL: FilterValueType
}

function App() {

	// const [tasks, setTasks] = useState<TaskType[]>([
	// 	{id: v1(), title: "HTML", isDone: true},
	// 	{id: v1(), title: "CSS", isDone: true},
	// 	{id: v1(), title: "JS", isDone: true},
	// 	{id: v1(), title: "React", isDone: false},
	// 	{id: v1(), title: "Angular", isDone: false},
	// 	{id: v1(), title: "VUE", isDone: false},
	// 	{id: v1(), title: "TS", isDone: false}
	// ])

	const todoListID1 = v1() //1db16fa0-94b2-11ec-b116-c3daf8c153ff
	const todoListID2 = v1()
	const todoListID3 = v1()

	const [tasksObj, setTasks] = useState({
		[todoListID1]: [
			{id: v1(), title: "HTML", isDone: true},
			{id: v1(), title: "CSS", isDone: true},
			{id: v1(), title: "JS", isDone: true},
			{id: v1(), title: "React", isDone: false},
			{id: v1(), title: "Angul", isDone: false},
			{id: v1(), title: "VUE", isDone: false},
			{id: v1(), title: "TS", isDone: false}
		],
		[todoListID2]: [
			{id: v1(), title: "XXXX", isDone: false},
			{id: v1(), title: "SSS", isDone: true},
			{id: v1(), title: "JJJ", isDone: true},
			{id: v1(), title: "RRR", isDone: false},
			{id: v1(), title: "AAA", isDone: false},
			{id: v1(), title: "VVV", isDone: true},
			{id: v1(), title: "TST", isDone: false}
		],
		[todoListID3]: [
			{id: v1(), title: "1A2", isDone: false},
			{id: v1(), title: "6B5", isDone: true},
			{id: v1(), title: "J1J", isDone: true},
			{id: v1(), title: "R2R", isDone: false},
			{id: v1(), title: "A3A", isDone: true},
			{id: v1(), title: "V4V", isDone: false},
			{id: v1(), title: "T5S", isDone: true}
		],
	})
	//console.log(95, allTasks[`1db16fa0-94b2-11ec-b116-c3daf8c153ff`])
	//console.log(95, tasksObj[todoListID1])

	//const [filter, setFilter] = useState<FilterValueType>(`all`) убрали после появления отдельных TodoList

	const changeTaskStatus = (taskID: string, isDone: boolean, todoListID: string) => {

		debugger
		// let tasks = tasksObj[todoListID]
		// let task = tasks.find(t => t.id === taskID)
		// if (task) {
		// 	task.isDone = isDone
		// 	setTasks({...tasksObj})
		// }

		// console.log(74)
		let tasks = tasksObj[todoListID]
		tasksObj[todoListID] = tasks.map(task => task.id === taskID
			? {id: task.id, title: task.title.split(``).reverse().join(``), isDone: isDone}
			: task)

		// ? {id: task.id, title: ttask.title.split(``).reverse().join(``), isDone: !isDone}
		// : task
		// })
		setTasks({...tasksObj})
		// ? {id: t.id, title: t.title.split(``).reverse().join(``), isDone: !t.isDone}
	}

	const addTask = (title: string, todoListID: string) => {
		let task = {id: v1(), title: title, isDone: false}
		let tasks = tasksObj[todoListID]
		let newTasks = [task, ...tasks]
		tasksObj[todoListID] = newTasks
		setTasks({...tasksObj})
	}

	const removeTask = (taskID: string, todoListID: string) => {
		//debugger
		console.log(90, taskID, todoListID)
		let tasks = tasksObj[todoListID]
		let filteredTasks = tasks.filter(task => task.id !== taskID)
		tasksObj[todoListID] = filteredTasks

		setTasks({...tasksObj})
	}


	const changeFilter = (filter: FilterValueType, todoListID: string) => {
		//debugger
		//setFilter(filter)
		let pressedTodoList = todoLists.find(t => t.id === todoListID)
		// console.log(51, pressedTodoList)
		// console.log(52, todoLists)

		if (pressedTodoList) {
			pressedTodoList.filterTL = filter
		}
		// console.log(57, pressedTodoList)
		// console.log(58, todoLists)
		setTodoLists([...todoLists])
	}


	const [todoLists, setTodoLists] = useState<todoListsType[]>([
		{id: todoListID1, titleTL: `All skills: `, filterTL: `all`},
		{id: todoListID2, titleTL: `what to learn?`, filterTL: `active`},
		{id: todoListID3, titleTL: `what I've already learned?`, filterTL: `completed`},

	])

	return (

		<div className="App">
			{todoLists.map(todoList => {

				let filteredTasksForRender = tasksObj[todoList.id]
				// console.log(124, tasksObj)
				// console.log(125, todoList)
				// console.log(126, todoList.id)
				// console.log(127, tasksObj[todoList.id])
				if (todoList.filterTL === "completed") {
					filteredTasksForRender = filteredTasksForRender.filter(t => t.isDone === true)
				} else if (todoList.filterTL === "active") {
					filteredTasksForRender = filteredTasksForRender.filter(t => t.isDone === false)
				}

				return (<TodoList title={todoList.titleTL}
													key={todoList.id}
													todoListID={todoList.id}
													tasksList={filteredTasksForRender}
													removeTask={removeTask}
													changeFilter={changeFilter}
													addTask={addTask}
													changeTaskStatus={changeTaskStatus}
													filter={todoList.filterTL}
					/>

				)
			})}


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


// const getFilteredTasksForRender = () => {
//
// 	if (filter === "completed") {
// 		return tasks.filter(t => t.isDone === true)
// 	} else if (filter === "active") {
// 		return tasks.filter(t => t.isDone === false)
// 	} else {
// 		return tasks
// 	}
// }
// const filteredTasksForRender = getFilteredTasksForRender()
