import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-1/3 bg-slate-800 text-white p-8 space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Aidan Starke</h2>
        <p className="font-semibold text-lg text-blue-200">
          Senior Full-Stack Developer
        </p>
        <p className="text-blue-100">Rust and Blockchain Technology</p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 border-b border-white pb-2 -mr-8">
          CONTACT
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-blue-400 flex-shrink-0" />
            <span>+64 21 081 28978</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-blue-400 flex-shrink-0" />
            <span className="break-all">starke.aidan@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin size={16} className="text-blue-400 flex-shrink-0" />
            <span className="break-all">linkedin.com/in/aidan-starke</span>
          </div>
          <div className="flex items-center gap-3">
            <Github size={16} className="text-blue-400 flex-shrink-0" />
            <span className="break-all">github.com/aidan-starke</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-blue-400 flex-shrink-0" />
            <span>Feilding, New Zealand</span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 border-b border-white pb-2 -mr-8">
          EDUCATION
        </h3>
        <div className="text-sm">
          <h4 className="font-semibold text-blue-200">Enspiral Dev Academy</h4>
          <p className="text-gray-300">Web Development Training</p>
          <p className="text-gray-400 text-xs">NZQA Level 6 with 72 Credits</p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 border-b border-white pb-2 -mr-8">
          SKILLS
        </h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-200 mb-2">
              Languages / Frameworks
            </h4>
            <ul className="space-y-1">
              <li>TypeScript</li>
              <li>Rust</li>
              <li>Solidity</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Blockchain</h4>
            <ul className="space-y-1">
              <li>Substrate</li>
              <li>MetaMask</li>
              <li>WalletConnect</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-200 mb-2">Tools</h4>
            <ul className="space-y-1">
              <li>GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Redis</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
