import { Sidebar } from "./sidebar";
import { Main } from "./main";

export function CV() {
  return (
    <div className="min-h-screen flex w-screen items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-32 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl min-h-screen flex rounded-2xl border border-white/20 relative z-10 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
