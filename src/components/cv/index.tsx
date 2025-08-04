import { Sidebar } from "./sidebar";
import { Main } from "./main";

export function CV() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl min-h-screen flex">
      <Sidebar />
      <Main />
    </div>
  );
}
