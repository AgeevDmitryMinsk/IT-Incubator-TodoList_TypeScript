import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";
import {Button} from "./components/Button";

type TaskPropsType = TaskType & {
	taskId: string
	removeTask: (taskID: string, todoListID: string) => void
	changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
	todoListID: string
}

const Task = (props: TaskPropsType) => {

	function onClickRemoveButtonHandler() {
		console.log(14, props.todoListID, props.title)
		props.removeTask(props.taskId, props.todoListID)
	}

	function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
		props.changeTaskStatus(props.id, e.currentTarget.checked, props.todoListID)

	}


	return (
		<li className={props.isDone ? "is_done_task" : ""}>
			<button onClick={onClickRemoveButtonHandler}>X</button>

			<Button name={`X(univ)`}
							className={``}
							callBack={onClickRemoveButtonHandler}/>

			<input type="checkbox"
						 checked={props.isDone}
						 onChange={onChangeInputHandler}/>


			<span>{props.title}</span>
		</li>
	);
};

export default Task;
