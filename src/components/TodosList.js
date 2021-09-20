import TodoItem from './TodoItem';

const TodosList = ({ todos, toggleTodo, removeTodo, upateTodo}) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          upateTodo={upateTodo}
        />
      })}
    </div>
  );
}

export default TodosList;
