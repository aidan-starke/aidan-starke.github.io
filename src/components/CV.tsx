import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-background">
      {/* Header Section */}
      <Card className="text-center">
        <CardHeader className="pb-4">
          <CardTitle className="text-4xl font-bold">Aidan Starke</CardTitle>
          <CardDescription className="text-xl">
            Senior Full-Stack Developer | Rust and Blockchain Technology
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="mailto:starke.aidan@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={16} />
                starke.aidan@gmail.com
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+642108128978" className="flex items-center gap-2">
                <Phone size={16} />
                +64 21 081 28978
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/aidan-starke/"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/aidan-starke"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              Feilding, New Zealand
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Senior Full-Stack Developer with 4 years TypeScript/React
            experience, specializing in blockchain application development at
            Futureverse. I am seeking to transition from web development to Rust
            development, leveraging blockchain domain knowledge and API
            architecture expertise.
          </p>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Primary Languages & Frameworks
              </h3>
              <div className="space-y-3">
                <div>
                  <Badge variant="secondary" className="mb-1">
                    TypeScript/JavaScript
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    4 years production experience
                  </p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    React
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Advanced frontend development and state management
                  </p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Substrate
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Deep understanding of blockchain runtime development
                  </p>
                </div>
                <div>
                  <Badge variant="secondary" className="mb-1">
                    Rust
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Worked on the Substrate protocol at Futureverse, and
                    actively honing my skills through personal projects
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Blockchain & Web3</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Web3 Application Architecture
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Wallet Integration and Transaction Management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Blockchain API Development and Integration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Real-time Blockchain Data Processing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Substrate Framework Understanding
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Node.js
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  RESTful APIs and GraphQL
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  PostgreSQL, MongoDB
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  Docker, CI/CD Pipelines, Git
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono mt-1 flex-shrink-0">&gt;</span>
                  AWS and Cloud Services
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Senior Full-Stack Developer
                </h3>
                <p className="text-lg text-primary font-medium">Futureverse</p>
              </div>
              <Badge variant="secondary">1/11/2021 - Present</Badge>
            </div>

            <Separator />

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                <p>
                  Developed and maintained RESTful APIs for blockchain data
                  access, enabling seamless integration between web applications
                  and Substrate-based networks
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Built scalable web applications integrating with blockchain
                infrastructure through custom APIs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Architected high-performance blockchain indexers in TypeScript
                to process and structure on-chain data for application
                consumption
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Implemented TypeScript/React frontends with complex blockchain
                integrations, handling wallet connectivity, transaction
                management, and real-time data updates
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Key Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Project 1 */}
          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <a
                href="https://github.com/futureversecom/trn-cennz-burn"
                className="text-xl font-semibold text-primary hover:text-primary/80 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                CENNZ Burn Project <ExternalLink size={16} />
              </a>
              <Badge variant="secondary">Jan - Mar 2024</Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "SubSquid",
                "PostgreSQL",
                "Tailwind CSS",
              ].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <Separator />

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3 items-center">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                <span>
                  <b className="text-foreground">Lead developer</b> for
                  cross-blockchain token migration bridge enabling 1:1 CENNZ to
                  ROOT token conversion between CENNZnet and The Root Network
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Built custom multi-chain indexer using SubSquid to track burn
                events across CENNZnet and Ethereum networks, storing
                transaction data in PostgreSQL
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Collaborated with design team to implement pixel-perfect UI from
                Figma designs with responsive layouts, including
                internationalization support for Japanese community (primary
                user base)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Created CLI tool for payout processing with dynamic cycle-based
                calculations tied to ROOT token circulation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                <span>
                  Successfully processed{" "}
                  <b className="text-foreground">20,000+ transactions</b>,
                  ensuring zero data loss and accurate token conversion tracking
                </span>
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <a
                  href="https://github.com/aidan-starke/clai"
                  className="text-xl font-semibold text-primary hover:text-primary/80 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLAI - Command Line Artificial Interface{" "}
                  <ExternalLink size={16} />
                </a>
                <p className="text-muted-foreground mt-1">Personal Project</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Rust", "SQLite", "Claude API"].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            <Separator />

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Built comprehensive CLI tool in Rust for seamless Claude API
                integration with local session and role management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Implemented SQLite database with server-side connection handling
                for persistent session storage and assistant role management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Designed intuitive command-line interface with advanced argument
                parsing and error handling
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                Integrated RESTful API communication with proper authentication
                and rate limiting for Claude API interactions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-mono mt-1 flex-shrink-0">
                  &gt;
                </span>
                <span>
                  <b className="text-foreground">Key Rust Concepts Applied</b>:
                  Ownership and borrowing for memory safety, async/await for API
                  calls, error handling with Result types, and structured
                  concurrency for database operations
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Education & Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Enspiral Dev Academy Web Development Training Scheme
            </h3>
            <p className="text-muted-foreground">
              NZQA Level: Level 6 with 72 Credits
            </p>
          </div>
        </CardContent>
      </Card>

      {/* References */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">References</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold">Jason Tulp</h3>
                <p className="text-muted-foreground">
                  Blockchain Technology Specialist | Futureverse
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+64 21 676 111</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>jason@tulp.dev</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold">Warrick Wills</h3>
                <p className="text-muted-foreground">
                  Lead Engineer - Integration | Xero
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+64 21 116 8901</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>warrick.j@live.com</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CV;
