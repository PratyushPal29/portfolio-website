import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-0">
      <SectionHeading index="01" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              {
                "Hi, I’m Pratyush — a full-stack developer passionate about building scalable, user-focused digital products using React, Next.js, Node.js, and MongoDB."
              }
            </p>
            <p>
              {
                "I build high-performance web applications with a strong focus on frontend experience, and develop cross-platform mobile apps using React Native. I’ve also gained industry experience through my internship, where I worked on real-world systems and production-level features."
              }
            </p>
            <p>
              {
                "I enjoy solving complex problems, optimizing performance, and continuously learning to build smarter, more impactful products."
              }
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="group relative mx-auto w-full max-w-[320px]">
            {/* Terminal Header */}
            <div className="rounded-t-md bg-muted px-4 py-2 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                developer.js
              </span>
            </div>

            <div className="overflow-hidden rounded-b-md border border-border bg-secondary p-6 font-mono text-sm leading-relaxed shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <pre className="whitespace-pre-wrap text-foreground">
                {`const developer = {
  name: "Pratyush",
  role: "Full-Stack Developer",
  stack: [
    "React",
    "Next.js",
    "Node.js",
    "React Native"
  ],
  passionateAbout: "Building scalable, user-centric products"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
