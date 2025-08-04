import { ExternalLink } from "lucide-react";

export function Main() {
  return (
    <div className="w-2/3 p-8 space-y-8">
      {/* About Me Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
          ABOUT ME
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Senior Full-Stack Developer with 4 years TypeScript/React experience,
          specializing in blockchain application development at Futureverse. I
          am seeking to transition from web development to Rust development,
          leveraging blockchain domain knowledge and API architecture expertise.
        </p>
      </div>

      {/* Work Experience Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
          WORK EXPERIENCE
        </h2>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Senior Full-Stack Developer
              </h3>
              <p className="text-slate-600 font-medium">Futureverse</p>
            </div>
            <span className="text-slate-500 text-sm">Nov 2021 - Present</span>
          </div>

          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-slate-800 font-bold">•</span>
              Developed and maintained RESTful APIs for blockchain data access,
              enabling seamless integration between web applications, and
              Substrate and EVM based networks
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-800 font-bold">•</span>
              Built scalable web applications integrating with blockchain
              infrastructure through custom APIs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-800 font-bold">•</span>
              Architected high-performance blockchain indexers in TypeScript to
              process and structure on-chain data, made available via GraphQL
              APIs for application consumption
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-800 font-bold">•</span>
              Implemented TypeScript/React frontends with complex blockchain
              integrations, handling wallet connectivity, transaction
              management, and real-time data updates
            </li>
          </ul>
        </div>
      </div>

      {/* Key Projects Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
          KEY PROJECTS
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <a
                href="https://github.com/futureversecom/trn-cennz-burn"
                className="text-slate-800 font-bold hover:text-slate-600 flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                CENNZ Burn Project <ExternalLink size={14} />
              </a>
              <span className="text-slate-500 text-xs">
                Futureverse | Jan - Mar 2024
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-2">
              TypeScript, React, Next.js, SubSquid, PostgreSQL, Tailwind CSS
            </p>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                Lead developer for cross-blockchain token migration bridge
                enabling 1:1 CENNZ to ROOT token conversion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                Successfully processed 20,000+ transactions with zero data loss
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <a
                href="https://github.com/aidan-starke/clai"
                className="text-slate-800 font-bold hover:text-slate-600 flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLAI - Command Line Artificial Interface{" "}
                <ExternalLink size={14} />
              </a>
              <span className="text-slate-500 text-xs">Personal Project</span>
            </div>
            <p className="text-slate-600 text-sm mb-2">
              Rust, SQLite, Tokio, Serde, Axum, Claude API
            </p>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                Built comprehensive CLI tool in Rust for seamless Claude API
                integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600">•</span>
                Applied key Rust concepts: ownership, async/await, error
                handling with Result types
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
          REFERENCES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-800">Jason Tulp</h3>
            <p className="text-slate-600 text-sm">
              Blockchain Technology Specialist
            </p>
            <p className="text-slate-600 text-sm">Futureverse</p>
            <div className="text-slate-700 text-sm mt-2">
              <p>📞 +64 21 676 111</p>
              <p>✉️ jason@tulp.dev</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-800">Warrick Wills</h3>
            <p className="text-slate-600 text-sm">
              Lead Engineer - Integration
            </p>
            <p className="text-slate-600 text-sm">Xero</p>
            <div className="text-slate-700 text-sm mt-2">
              <p>📞 +64 21 116 8901</p>
              <p>✉️ warrick.j@live.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
