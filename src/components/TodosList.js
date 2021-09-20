import TodoItem from "./TodoItem";

const TodosList = ({ todos, toggleTodo, removeTodo}) => {
    return (
        <div>
            {todos.map((todo) => {
                return <TodoItem key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            })}
        </div>
    )
}

export default TodosList
