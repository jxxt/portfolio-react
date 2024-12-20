import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import Homepage from "./Homepage";
import Projects from "./Projects";
import Blogs from "./Blogs";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </Router>
    );
}

export default App;
