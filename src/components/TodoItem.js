const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div className="pad2">
          <input type="checkbox" checked={todo.completed ? 'checked' : ''} 
            onChange={() => toggleTodo(todo.id)} />
          {todo.text}
          <button className="del-btn" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem
