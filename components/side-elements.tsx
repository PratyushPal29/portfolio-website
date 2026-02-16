import { Github, Linkedin, Twitter } from "lucide-react"

export function SideElements() {
  return (
    <>
      {/* Left side - social */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-6 lg:flex xl:left-10">
        <a
          href="https://github.com/PratyushPal29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/pratyushpal29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/pratyushpal29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary hover:-translate-y-0.5"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <div className="h-24 w-px bg-muted-foreground" />
      </div>

      {/* Right side - email */}
      <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-6 lg:flex xl:right-10">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=29palpratyush04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-primary hover:-translate-y-0.5"
          style={{ writingMode: "vertical-rl" }}
        >
          29palpratyush04@gmail.com
        </a>
        <div className="h-24 w-px bg-muted-foreground" />
      </div>
    </>
  )
}
