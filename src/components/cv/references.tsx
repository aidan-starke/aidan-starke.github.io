export function References() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-800 pb-2 -ml-8 pl-8">
        REFERENCES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reference
          name="Jason Tulp"
          title="Blockchain Technology Specialist"
          company="Futureverse"
          phone="+64 21 676 111"
          email="jason@tulp.dev"
        />
        <Reference
          name="Warrick Wills"
          title="Lead Engineer - Integration"
          company="Xero"
          phone="+64 21 116 8901"
          email="warrick.j@live.com"
        />
      </div>
    </div>
  );
}

function Reference(props: {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
}) {
  return (
    <div>
      <h3 className="font-bold text-slate-800">{props.name}</h3>
      <p className="text-slate-600 text-sm">{props.title}</p>
      <p className="text-slate-600 text-sm">{props.company}</p>
      <div className="text-slate-700 text-sm mt-2">
        <p>📞 {props.phone}</p>
        <p>✉️ {props.email}</p>
      </div>
    </div>
  );
}