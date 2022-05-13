import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";

let todos = [
    { key: 1, title: "Hello", description: "Hello description", active: true },
    { key: 2, title: "Hello", description: "Hello description", active: true },
    { key: 3, title: "Hello", description: "Hello description", active: true },
];

let completedTodos = [
    {
        key: 4,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
    {
        key: 5,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
    {
        key: 6,
        title: "Buffallo",
        description: "Hello description",
        active: false,
    },
];

function App() {
    return (
        <div>
            <Navbar />
            <AddTodo />
            <Todos title="Your Todos" todos={todos} />
            <Todos title="Completed" todos={completedTodos} />
        </div>
    );
}

export default App;
