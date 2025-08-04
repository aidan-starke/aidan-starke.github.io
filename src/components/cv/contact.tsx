import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 border-b border-white pb-2 -mr-8">
        CONTACT
      </h3>
      <div className="space-y-3 text-sm">
        <ContactItem
          icon={<Phone size={16} className="text-blue-400 flex-shrink-0" />}
          text="+64 21 081 28978"
          href="tel:+6421081289"
        />
        <ContactItem
          icon={<Mail size={16} className="text-blue-400 flex-shrink-0" />}
          text="starke.aidan@gmail.com"
          href="mailto:starke.aidan@gmail.com"
        />
        <ContactItem
          icon={<Linkedin size={16} className="text-blue-400 flex-shrink-0" />}
          text="linkedin.com/in/aidan-starke"
          href="https://linkedin.com/in/aidan-starke"
        />
        <ContactItem
          icon={<Github size={16} className="text-blue-400 flex-shrink-0" />}
          text="github.com/aidan-starke"
          href="https://github.com/aidan-starke"
        />
        <ContactItem
          icon={<MapPin size={16} className="text-blue-400 flex-shrink-0" />}
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
          className="!text-white hover:!underline hover:!decoration-blue-200 hover:scale-105 transition-transform break-all"
        >
          {props.text}
        </a>
      ) : (
        <span className="break-all">{props.text}</span>
      )}
    </div>
  );
}
