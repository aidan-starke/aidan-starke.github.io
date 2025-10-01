import { SectionHeading } from "./section-heading";
import { ExternalLink } from "lucide-react";

export function Education() {
  return (
    <div className="group">
      <SectionHeading>EDUCATION</SectionHeading>
      <div className="text-sm space-y-4">
        <div>
          <h4 className="font-semibold text-blue-200">Enspiral Dev Academy</h4>
          <p className="text-gray-300">Web Development Training</p>
          <p className="text-xs text-gray-400">NZQA Level 6 with 72 Credits</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-200">
            <a
              href="https://www.freecodecamp.org/certification/fcc9dc73200-cbe2-4179-942b-75a7f0979652/foundational-c-sharp-with-microsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-100 inline-flex items-center gap-1"
            >
              Foundational C# with Microsoft
              <ExternalLink className="h-3 w-3" />
            </a>
          </h4>
          <p className="text-gray-300">freeCodeCamp</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-200">
            <a
              href="https://www.codecademy.com/profiles/aidan.starke/certificates/61c1368be7a7438ab39fb954885c5816"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-100 inline-flex items-center gap-1"
            >
              Learn Intermediate C#
              <ExternalLink className="h-3 w-3" />
            </a>
          </h4>
          <p className="text-gray-300">Codecademy</p>
        </div>
      </div>
    </div>
  );
}
