import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import CoreMembersSection from "./pages/badges";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/badges" element={<CoreMembersSection />} />
      </Routes>
    </Router>
  );
}

export default App;
