import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        ref={ref}
        />
    )
})
export default Input;