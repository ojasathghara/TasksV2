import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";

function App() {
    return (
        <div>
            <Navbar />
            <AddTodo />
            <Todos />
        </div>
    );
}

export default App;
