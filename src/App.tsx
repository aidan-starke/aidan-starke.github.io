import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cv" replace />} />
        <Route
          path="/cv"
          element={
            <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
              <div className="hover:shadow-3xl relative mx-auto flex min-h-screen max-w-5xl flex-col rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] lg:flex-row">
                <Sidebar />
                <Main />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
