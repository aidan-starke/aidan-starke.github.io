import { Header } from "./header";
import { Contact } from "./contact";
import { Education } from "./education";
import { Skills } from "./skills";

export function Sidebar() {
  return (
    <div className="w-1/3 bg-slate-800 text-white p-8 space-y-8">
      <Header />
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}
