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
    return (
        <div>
          <div className="grid">
            <div className="primary full-height pad1"><Navbar/></div>
                <div className="full-height pad">
                    <Header />
                    <InputTodo/>
                    <TodosList todos={todos}/>
                </div>
          </div>
        </div>
    )
}

export default TodoContainer
