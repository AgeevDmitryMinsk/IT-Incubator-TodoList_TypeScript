import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
    className: string
}

export const Button = (props: ButtonPropsType) => {
    function onClickHandle() {
        props.callBack()
    }

    return (
        <button
          className= {props.className}
          onClick={onClickHandle}>{props.name}</button>
    );
};


