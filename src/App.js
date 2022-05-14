import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import About from "./components/static/About";

let apiUrl = "";

function App() {
    switch (process.env.REACT_APP_BUILD) {
        case "production":
            apiUrl = "https://peaceful-island-64307.herokuapp.com";
            break;

        case "development":
            apiUrl = "http://localhost:16500";
            break;
        default:
            apiUrl = "";
    }

    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Todos pageTitle="Tasks" apiUrl={apiUrl} />}
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
