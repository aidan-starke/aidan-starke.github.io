export function Skills() {
  return (
    <div className="group">
      <h3 className="text-lg font-bold mb-4 border-b border-white pb-2 -mr-8 relative">
        SKILLS
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-500 origin-right"></div>
      </h3>
      <div className="space-y-4 text-sm">
        <List
          header="Languages / Frameworks"
          items={["TypeScript", "Rust", "Solidity", "React", "Next.js"]}
        />
        <List
          header="Blockchain"
          items={["Substrate", "MetaMask", "WalletConnect"]}
        />
        <List
          header="Tools"
          items={[
            "GitHub",
            "Docker",
            "AWS",
            "Redis",
            "PostgreSQL",
            "MongoDB",
          ]}
        />
      </div>
    </div>
  );
}

function List(props: { header: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-blue-200">{props.header}</h4>
      <ul className="space-y-1">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
