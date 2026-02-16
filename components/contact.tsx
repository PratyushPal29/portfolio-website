import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-0">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-4 font-mono text-sm text-primary">04. {"What's Next?"}</p>
        <h2 className="mb-6 text-balance text-4xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mb-10 text-pretty leading-relaxed text-muted-foreground">
          {
            "I'm currently open to new opportunities and my inbox is always open. Whether you have a question, a project idea, or just want to say hi — I'll do my best to get back to you!"
          }
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=29palpratyush04@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-sm border border-primary px-8 py-4 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>
      </div>
    </section>
  )
}
