import React from 'react';

const Input = (props) => {
    return (
        <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
    )
}
export default Input;