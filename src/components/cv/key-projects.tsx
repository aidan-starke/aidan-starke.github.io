import { ExternalLink } from "lucide-react";
import { BulletList } from "./bullet-list";

export function KeyProjects() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
        KEY PROJECTS
      </h2>

      <div className="space-y-6">
        <Project
          title="CENNZ Burn Project"
          href="https://github.com/futureversecom/trn-cennz-burn"
          timeline="Futureverse | Jan - Mar 2024"
          technologies="TypeScript, React, Next.js, SubSquid, PostgreSQL, Tailwind CSS"
          description={[
            "Lead developer for cross-blockchain token migration bridge enabling 1:1 CENNZ to ROOT token conversion",
            "Successfully processed 20,000+ transactions with zero data loss"
          ]}
        />
        <Project
          title="CLAI - Command Line Artificial Interface"
          href="https://github.com/aidan-starke/clai"
          timeline="Personal Project"
          technologies="Rust, SQLite, Tokio, Serde, Axum, Claude API"
          description={[
            "Built comprehensive CLI tool in Rust for seamless Claude API integration",
            "Applied key Rust concepts: ownership, async/await, error handling with Result types"
          ]}
        />
      </div>
    </div>
  );
}

function Project(props: {
  title: string;
  href: string;
  timeline: string;
  technologies: string;
  description: string[];
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <a
          href={props.href}
          className="text-slate-800 font-bold hover:text-slate-600 flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title} <ExternalLink size={14} />
        </a>
        <span className="text-slate-500 text-xs">{props.timeline}</span>
      </div>
      <p className="text-slate-600 text-sm mb-2">{props.technologies}</p>
      <BulletList items={props.description} size="sm" />
    </div>
  );
}