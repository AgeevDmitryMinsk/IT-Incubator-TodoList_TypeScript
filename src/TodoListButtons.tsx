import React from 'react';
import {FilterValueType} from "./App";
import {Button} from "./components/Button";

type TodoListButtonsType = {
	changeFilter: (filter: FilterValueType, todoListID: string) => void
	filter: FilterValueType
	todoListID:string
}

const TodoListButtons = (props: TodoListButtonsType) => {
	function onAllClickHandle() {

		props.changeFilter(`all` , props.todoListID)
	}

	function onActiveClickHandle() {
		console.log(18, props.todoListID, props.filter)
		props.changeFilter('active' , props.todoListID)
	}


	function onCompletedClickHandle() {
		console.log(24, props.todoListID, props.filter)
		props.changeFilter('completed', props.todoListID)
	}


	return (
		<div>
			<button
				style={{marginRight: `35px`}}
				onClick={onAllClickHandle}
				className={props.filter === "all"
					? "active_filter_button"
					: ""}
			>All
			</button>
			<button
				style={{marginRight: `25px`}}
				onClick={onActiveClickHandle}
				className={props.filter === "active"
					? "active_filter_button"
					: ""}
			>Active
			</button>
			<button
				onClick={onCompletedClickHandle}
				className={props.filter === "completed"
					? "active_filter_button"
					: ""}
			>Completed
			</button>
			<hr/>

			{/*универсальные кнопки:*/}
			<Button name={`All(uni)`}
							callBack={onAllClickHandle}
							className={props.filter === "all"
								? "active_filter_button"
								: ""}
			/>
			<Button name={`Active(uni)`}
							className={props.filter === "active"
								? "active_filter_button"
								: ""}
							callBack={onActiveClickHandle}/>
			<Button name={`Completed(uni)`}
							className={props.filter === "completed"
								? "active_filter_button"
								: ""}
							callBack={onCompletedClickHandle}/>
			<Button name={`<= Universal Button`}
							className={props.filter === "all"
								? "active_filter_button"
								: ""}
							callBack={() => {
								console.log(`Universal Button`)
							}}/>
		</div>
	);
};

export default TodoListButtons;
