const TodoItem = ({ todo }) => {
    return (
        <div className="pad2">
            {todo.text}
        </div>
    )
}

export default TodoItem
