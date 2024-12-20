import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import Homepage from "./Homepage";
import Projects from "./Projects";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;
