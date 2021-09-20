import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Todos One', completed: false },
        { id: 2, text: 'Todos Two', completed: true },
        { id: 3, text: 'Todos Three', completed: false },
        { id: 4, text: 'Todos Four', completed: true },
        { id: 5, text: 'Todos Five', completed: false },
        { id: 6, text: 'Todos Six', completed: true },
        { id: 7, text: 'Todos Seven', completed: false },
    ]);

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = (todo) => {
        const newId = todos.length + 1;
        todo.id = newId;
        setTodos([...todos, todo])
    };

    return (
        <div>
          <div className="grid">
            <div className="primary full-height pad1"><Navbar/></div>
                <div className="full-height pad">
                    <Header />
                    <InputTodo addTodo={addTodo} />
                    {todos.length > 0 ?
                        <TodosList todos={todos}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        /> : 'No Todos'
                    }
                </div>
          </div>
        </div>
    )
}

export default TodoContainer
