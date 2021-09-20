import React from 'react'

const InputTodo = () => {
    return (
        <div className="outlined">
            <input type="text" className="no-border" placeholder="Add Todo..." />
            <button type="button" className="btn no-border">+</button>
        </div>
    )
}

export default InputTodo
