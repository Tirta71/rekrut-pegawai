import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Announcement from "./Pages/Announcement";
import DetailLowongan from "./Pages/DetailLowongan";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hasil-rekrut" element={<Announcement />} />
        <Route path="/DetailLowongan/:id" element={<DetailLowongan />} />
      </Routes>
    </Router>
  );
}

export default App;
