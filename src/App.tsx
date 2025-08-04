import { Sidebar } from "./components/sidebar";
import { Main } from "./components/main";

function App() {
  return (
    <div className="min-h-screen flex w-screen items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto shadow-2xl min-h-screen flex rounded-2xl relative hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
