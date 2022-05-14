import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import About from "./components/static/About";

let port = process.env.port || 16500;
let local_url = `http://localhost:${port}`;

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Todos pageTitle="Tasks" localhost={local_url} />
                        }
                    />
                    <Route
                        path="/about"
                        element={<About pageTitle="Tasks | About" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
