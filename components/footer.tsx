import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16">
      {/* Side social bar for mobile */}
      <div className="flex items-center justify-center gap-6 pb-4 lg:hidden">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="text-center font-mono text-xs text-muted-foreground">
        Designed & Built by Pratyush Pal
      </p>
    </footer>
  )
}
