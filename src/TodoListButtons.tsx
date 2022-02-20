import React from 'react';
import {FilterValueType} from "./App";

type TodoListButtonsType = {
    changeFilter: (filter: FilterValueType)=>void
}

const TodoListButtons = (props: TodoListButtonsType) => {
    function onAllClickHandle() {
        props.changeFilter(`all`)
    }

    function onActiveClickHandle() {
        props.changeFilter('active')
    }


    function onCompletedClickHandle() {
        props.changeFilter('completed')
    }

    return (
        <div>
            <button onClick={onAllClickHandle}>All</button>
            <button onClick={onActiveClickHandle}>Active</button>
            <button onClick={onCompletedClickHandle}>Completed</button>
        </div>
    );
};

export default TodoListButtons;
