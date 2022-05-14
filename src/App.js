import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";

let port = process.env.port || 16500;
let local_url = `http://localhost:${port}`;

function App() {
    return (
        <div>
            <Navbar />
            <Todos localhost={local_url} />
        </div>
    );
}

export default App;
