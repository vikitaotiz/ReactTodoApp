const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div className="pad2">
          <input type="checkbox" checked={todo.completed ? 'checked' : ''} 
            onChange={() => toggleTodo(todo.id)} />
            <span className={todo.completed? 'doneTodo' : 'todoItem'}>{todo.text}</span>
          <button className="del-btn" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem
