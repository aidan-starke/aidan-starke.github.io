import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CV } from "./components/cv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cv" replace />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
