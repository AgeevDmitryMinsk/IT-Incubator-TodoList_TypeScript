import React, {ChangeEvent, useState} from 'react';


type AddTaskFormPropsType = {
    addTask: (title: string) => void
}

const AddTaskForm = (props: AddTaskFormPropsType) => {
    const [title, setTitle] = useState(``)
    const [error, setError] = useState<boolean>(false)

    function onChangeHandleInput(event: ChangeEvent<HTMLInputElement>) {
        setError(false)
        console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
        if (event.currentTarget.value===``) {setError(true)}
    }

    function onKeyPressHandleInput(event: React.KeyboardEvent<HTMLInputElement>) {
        // console.log(event.charCode) код клавиши Enter event.charCode = 13
        // if (event.charCode === 13) {
        if (event.key === `Enter`) {
            console.log(`нажат Enter`)
            onClickButtonHandler()
        }

    }

    function onClickButtonHandler() {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle(``)
    }

    const errorMesageStyle = {
    color: "red"
    }
    const errorMessage = error
        ? <div style={errorMesageStyle}>Title is require!</div>
        : null

    function onBlurHandleInput() {
        onClickButtonHandler()
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandleInput}
                   onKeyPress={onKeyPressHandleInput}
                   // onBlur={onBlurHandleInput}
                   className= {error?"errorCSS":""}
            />
            <button onClick={onClickButtonHandler}>+</button>
            {errorMessage}
        </div>
    );
};

export default AddTaskForm;
