import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Ongoing from "./pages/Ongoing";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";

function App() {
  return (
    <Router>
      {/* <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/ongoing">Ongoing</Link>
        <Link to="/upcoming">Upcoming</Link>
        <Link to="/completed">Completed</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Router>
  );
}

export default App;
