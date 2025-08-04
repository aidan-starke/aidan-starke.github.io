import { Header } from "./header";
import { Contact } from "./contact";
import { Education } from "./education";
import { Skills } from "./skills";

export function Sidebar() {
  return (
    <div className="relative w-1/3 space-y-8 overflow-hidden rounded-l-2xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 p-8 text-white">
      {/* Subtle animated accent */}
      <div className="absolute top-0 right-0 w-1 animate-pulse bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />
      <Header />
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}
