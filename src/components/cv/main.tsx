import { AboutMe } from "./about-me";
import { WorkExperience } from "./work-experience";
import { KeyProjects } from "./key-projects";
import { References } from "./references";

export function Main() {
  return (
    <div className="w-2/3 p-8 space-y-8 rounded-r-2xl bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
      <AboutMe />
      <WorkExperience />
      <KeyProjects />
      <References />
    </div>
  );
}
