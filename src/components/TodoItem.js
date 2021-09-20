const TodoItem = ({ todo, toggleTodo, removeTodo, upateTodo }) => {
  const editTodo = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        upateTodo(Number(e.target.id), e.target.textContent);
    }
  };

  return (
    <div className="pad2">
        <input type="checkbox" checked={todo.completed ? 'checked' : ''} 
        onChange={() => toggleTodo(todo.id)} />
        <span
            className={todo.completed ? 'doneTodo' : 'todoItem'}
            contentEditable={!todo.completed}
            onKeyDown={editTodo}
            suppressContentEditableWarning={true}
            id={todo.id}
        >{todo.text}</span>
        <button className="del-btn" onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};

export default TodoItem;
