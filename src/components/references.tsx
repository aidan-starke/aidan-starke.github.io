import { SectionHeading } from "./section-heading";
import { Mail, Phone } from "lucide-react";

export function References() {
  return (
    <div className="group">
      <SectionHeading>REFERENCES</SectionHeading>

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
      <div className="text-slate-700 text-sm mt-2 space-y-1">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-slate-600" />
          <a
            href={`tel:${props.phone.replace(/\s/g, "")}`}
            className="text-slate-700 hover:underline hover:decoration-blue-200 hover:scale-105 transition-transform break-all"
          >
            {props.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-slate-600" />
          <a
            href={`mailto:${props.email}`}
            className="text-slate-700 hover:underline hover:decoration-blue-200 hover:scale-105 transition-transform break-all"
          >
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}

