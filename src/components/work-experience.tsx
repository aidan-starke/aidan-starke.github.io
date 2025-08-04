import { BulletList } from "./bullet-list";
import { SectionHeading } from "./section-heading";

export function WorkExperience() {
  return (
    <div className="group">
      <SectionHeading>WORK EXPERIENCE</SectionHeading>

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

        <BulletList
          items={[
            "Developed and maintained RESTful APIs for blockchain data access, enabling seamless integration between web applications, and Substrate and EVM based networks",
            "Built scalable web applications integrating with blockchain infrastructure through custom APIs",
            "Architected high-performance blockchain indexers in TypeScript to process and structure on-chain data, made available via GraphQL APIs for application consumption",
            "Implemented TypeScript/React frontends with complex blockchain integrations, handling wallet connectivity, transaction management, and real-time data updates"
          ]}
        />
      </div>
    </div>
  );
}

