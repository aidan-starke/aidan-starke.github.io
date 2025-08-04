import { SectionHeading } from "./section-heading";
import { Mail, Phone } from "lucide-react";

export function References() {
  return (
    <div className="group">
      <SectionHeading>REFERENCES</SectionHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
      <p className="text-sm text-slate-600">{props.title}</p>
      <p className="text-sm text-slate-600">{props.company}</p>
      <div className="mt-2 space-y-1 text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-slate-600" />
          <a
            href={`tel:${props.phone.replace(/\s/g, "")}`}
            className="break-all text-slate-700 transition-transform hover:scale-105 hover:underline hover:decoration-blue-200"
          >
            {props.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-slate-600" />
          <a
            href={`mailto:${props.email}`}
            className="break-all text-slate-700 transition-transform hover:scale-105 hover:underline hover:decoration-blue-200"
          >
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}
