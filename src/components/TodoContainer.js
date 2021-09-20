import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import About from "./About";

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

    const upateTodo = (id, data) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, text: data } : todo))
    }

    return (
        <Router>
            <div>
          <div className="grid">
            <div className="primary full-height pad1"><Navbar/></div>
                <div className="full-height pad">
                    <Header />
                    <Route path='/' exact render={(props) => (
                    <>
                    <InputTodo addTodo={addTodo} />
                    {todos.length > 0 ?
                        <TodosList todos={todos}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                            upateTodo={upateTodo}
                        /> : 'No Todos'
                    }
                    </>
                    )}/>
                    <Route path="/about" component={About}/>
                </div>
          </div>
        </div>
        </Router>
    )
}

export default TodoContainer
