"use client"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Musically",
    image: "/MusicallySS.png",
    description:
      "Musically is a secure, full-stack music platform where users can stream songs, upload tracks, create custom albums, and connect through real-time chat—all in one seamless experience.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/PratyushPal29/Musically",
    live: "https://musically-umber.vercel.app",
    align: "right" as const,
  },
  {
    title: "Grouplance",
    image: "/GroupLanceSS.png",
    description:
      "GroupLance is a collaborative platform built with MongoDB and React that enables seamless group creation, real-time coordination, project management, and secure team collaboration in one intuitive workspace.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Dibs07/GroupLance",
    live: "https://group-lance.vercel.app",
    align: "left" as const,
  },
  {
    title: "Friends",
    image: "/FriendsSS.png",
    description:
      "A full-stack social media app that lets users share updates, like and comment on posts, follow friends, and stay connected through a seamless and interactive experience.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/PratyushPal29/Social-media-app",
    align: "right" as const,
  },
]

const otherProjects = [
  {
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracking app with portfolio management, price alerts, and historical data visualization.",
    tech: ["React", "CoinGecko API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Flow",
    description:
      "A minimalist project management tool with drag-and-drop kanban boards, team collaboration, and time tracking.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "Weather CLI",
    description:
      "A command-line weather application that provides forecasts, severe weather alerts, and air quality data for any location.",
    tech: ["Node.js", "OpenWeather API", "Chalk"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:px-0">
      <SectionHeading index="03" title="Projects" />

      {/* Featured Projects */}
      <div className="mb-24 space-y-24">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
      </div>

      {/* Other Projects */}
      {/* <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
        Other Noteworthy Projects
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <OtherProject key={project.title} project={project} />
        ))}
      </div> */}
    </section>
  )
}

function FeaturedProject({
  project,
}: {
  project: (typeof featuredProjects)[number]
}) {
  const isRight = project.align === "right"

  return (
    <div className="relative grid items-center gap-4 lg:grid-cols-12">
      {/* Project image placeholder */}
      <div
        className={`relative overflow-hidden rounded-sm lg:col-span-7 ${isRight ? "lg:col-start-1" : "lg:col-start-6"} lg:row-start-1`}
      >
        <Image src={project.image} alt={project.title} width={500} height={300} className=" object-cover" />
      </div>

      {/* Project info */}
      <div
        className={`relative z-10 lg:col-span-6 ${isRight ? "lg:col-start-7 lg:text-right" : "lg:col-start-1 lg:text-left"} lg:row-start-1`}
      >
        <p className="mb-1 font-mono text-sm text-primary">Featured Project</p>
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {project.title}
        </h3>
        <div className="mb-4 rounded-sm bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-lg">
          {project.description}
        </div>
        <div
          className={`mb-4 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground ${isRight ? "lg:justify-end" : "lg:justify-start"}`}
        >
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div
          className={`flex items-center gap-4 ${isRight ? "lg:justify-end" : "lg:justify-start"}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function OtherProject({
  project,
}: {
  project: (typeof otherProjects)[number]
}) {
  return (
    <div className="group flex flex-col rounded-sm bg-card p-6 transition-transform hover:-translate-y-1">
      <div className="mb-6 flex items-center justify-between">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="outline"
            className="rounded-sm border-border px-2 py-0.5 text-xs font-normal text-muted-foreground"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}
