import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SideElements } from "@/components/side-elements"

export default function Page() {
  return (
    <>
      <Nav />
      <SideElements />
      <main className="mx-auto max-w-4xl px-6 lg:px-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
