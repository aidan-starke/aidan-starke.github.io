import { Header } from "./header";
import { Contact } from "./contact";
import { Education } from "./education";
import { Skills } from "./skills";

export function Sidebar() {
  return (
    <div className="w-1/3 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white p-8 space-y-8 rounded-l-2xl relative overflow-hidden">
      {/* Subtle animated accent */}
      <div className="absolute top-0 right-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 animate-pulse"></div>
      <Header />
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}
