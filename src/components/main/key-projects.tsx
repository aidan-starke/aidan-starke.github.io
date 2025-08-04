import { ExternalLink } from "lucide-react";
import { BulletList } from "../bullet-list";
import { SectionHeading } from "./section-heading";
import { Link } from "../link";

export function KeyProjects() {
  return (
    <div className="group">
      <SectionHeading>KEY PROJECTS</SectionHeading>

      <div className="space-y-6">
        <Project
          title="CENNZ Burn Project"
          href="https://github.com/futureversecom/trn-cennz-burn"
          timeline="Futureverse | Jan - Mar 2024"
          technologies="TypeScript, React, Next.js, SubSquid, PostgreSQL, Tailwind CSS"
          description={[
            "Lead developer for cross-blockchain token migration bridge enabling 1:1 CENNZ to ROOT token conversion",
            "Successfully processed 20,000+ transactions with zero data loss",
          ]}
        />
        <Project
          title="CLAI - Command Line Artificial Interface"
          href="https://github.com/aidan-starke/clai"
          timeline="Personal Project"
          technologies="Rust, SQLite, Tokio, Serde, Axum, Claude API"
          description={[
            "Built comprehensive CLI tool in Rust for seamless Claude API integration",
            "Applied key Rust concepts: ownership, async/await, error handling with Result types",
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
      <div className="mb-2 flex items-center justify-between">
        <Link
          href={props.href}
          className="flex items-center gap-1 font-bold text-slate-800 hover:underline hover:decoration-blue-200"
        >
          {props.title} <ExternalLink size={14} />
        </Link>
        <span className="text-xs text-slate-500">{props.timeline}</span>
      </div>
      <p className="mb-2 text-sm text-slate-600">{props.technologies}</p>
      <BulletList items={props.description} size="sm" />
    </div>
  );
}
