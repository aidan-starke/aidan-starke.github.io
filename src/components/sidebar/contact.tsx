import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <div className="group">
      <SectionHeading>CONTACT</SectionHeading>
      <div className="space-y-3 text-sm">
        <ContactItem
          icon={<Phone size={16} className="flex-shrink-0 text-blue-400" />}
          text="+64 21 081 28978"
          href="tel:+6421081289"
        />
        <ContactItem
          icon={<Mail size={16} className="flex-shrink-0 text-blue-400" />}
          text="starke.aidan@gmail.com"
          href="mailto:starke.aidan@gmail.com"
        />
        <ContactItem
          icon={<Linkedin size={16} className="flex-shrink-0 text-blue-400" />}
          text="linkedin.com/in/aidan-starke"
          href="https://linkedin.com/in/aidan-starke"
        />
        <ContactItem
          icon={<Github size={16} className="flex-shrink-0 text-blue-400" />}
          text="github.com/aidan-starke"
          href="https://github.com/aidan-starke"
        />
        <ContactItem
          icon={<MapPin size={16} className="flex-shrink-0 text-blue-400" />}
          text="Feilding, New Zealand"
        />
      </div>
    </div>
  );
}

function ContactItem(props: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {props.icon}
      {props.href ? (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-white transition-transform hover:scale-105 hover:underline hover:decoration-blue-200"
        >
          {props.text}
        </a>
      ) : (
        <span className="break-all">{props.text}</span>
      )}
    </div>
  );
}
