import { Sidebar } from "./sidebar";
import { Main } from "./main";

export function CV() {
  return (
    <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl min-h-screen flex rounded-2xl border border-white/20 relative z-10 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
      <Sidebar />
      <Main />
    </div>
  );
}
