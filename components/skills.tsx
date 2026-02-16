"use client";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "Docker",
      "System Design Basics",
      "Agile Methodology",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-0">
      <SectionHeading index="02" title="Skills" />

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="group">
            <h3 className="mb-4 font-mono text-sm tracking-wide text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-sm border-border px-3 py-1.5 text-sm font-normal text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
