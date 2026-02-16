"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-lg shadow-background/20 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-xl font-bold text-primary transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          {"<PratyushPal />"}
        </a>

        {/* Desktop links */}
        <ol className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/PratyushPal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-primary px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
            >
              Resume
            </a>
          </li>
        </ol>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col items-center gap-6 bg-card px-6 py-10 md:hidden">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-primary">
                {String(i + 1).padStart(2, "0")}.
              </span>{" "}
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-primary px-6 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
