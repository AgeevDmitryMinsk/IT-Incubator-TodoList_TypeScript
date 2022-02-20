import React, {ChangeEvent, useState} from 'react';


type AddTaskFormPropsType = {
    addTask: (title: string) => void
}

const AddTaskForm = (props: AddTaskFormPropsType) => {
    const [title, setTitle] = useState(``)

    function onChangeHandleInput(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    function onKeyPressHandleInput(event: React.KeyboardEvent<HTMLInputElement> ) {
        // console.log(event.charCode) код клавиши Enter event.charCode = 13
        if (event.charCode === 13) {
            console.log(`нажат Enter`)
            onClickButtonHandler()
        }

    }

    function onClickButtonHandler() {
        props.addTask(title)
        setTitle(``)
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandleInput} onKeyPress={onKeyPressHandleInput}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default AddTaskForm;
