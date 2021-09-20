import Navbar from "./Navbar";
import Header from "./Header";
import TodosList from "./TodosList";

const TodoContainer = () => {
    return (
        <div>
          <div className="grid">
            <div className="primary full-height"><Navbar/></div>
                <div class="full-height">
                    <Header />
                    <TodosList/>
                </div>
          </div>
        </div>
    )
}

export default TodoContainer
