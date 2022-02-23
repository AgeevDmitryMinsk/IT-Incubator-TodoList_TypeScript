import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";
import {Button} from "./components/Button";

type TaskPropsType = TaskType & {
	removeTask: (taskID: string) => void
	changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const Task = (props: TaskPropsType) => {

	function onClickRemoveButtonHandler() {
		props.removeTask(props.id)
	}

	function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
		props.changeTaskStatus(props.id, e.currentTarget.checked)

	}


	return (
		<li className={props.isDone ? "is_done_task" : ""}>
			<button onClick={onClickRemoveButtonHandler}>X</button>

			<Button name={`X(universal)`}
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
