import Link from "next/link"
import { MapPin, ExternalLink } from 'lucide-react'
import { SocialLinks } from "@/components/social-links"
import { MainNav } from "@/components/main-nav"
import { ExperienceItem } from "@/components/experience-item"
import { ProjectCard } from "@/components/project-card"
import { experiences, projects } from "@/lib/projects-data"

export default function Portfolio() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3); // Get top 2 featured projects for main page

  return (
    <>
      <div className="min-h-screen bg-white text-gray-700">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-0 xl:px-24">
          <div className="lg:flex lg:justify-between lg:gap-16 xl:gap-24">
            {/* Left Column - Header */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  <Link href="/">Bekhzod Akhmadjonov</Link>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-blue-600 sm:text-xl">AI/ML Engineer</h2>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  Tashkent, Uzbekistan
                </div>
                <p className="mt-4 max-w-xs leading-normal text-gray-600">
                  I build intelligent AI products, ML workflows, and data-driven systems.
                </p>
                <MainNav />
              </div>
              <SocialLinks />
            </header>

            {/* Right Column - Main Content */}
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              {/* About Section */}
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 lg:sr-only">About</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    ⚡️ Who Am I?
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      I'm Bekhzod - an <span className="text-blue-600 font-semibold">AI/ML engineer</span> focused on turning <span className="text-blue-600 font-semibold">complex ideas into intelligent products</span>. I started by teaching code and building real applications, then moved deeper into machine learning, LLM systems, and practical AI automation.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Now, I design and ship AI-powered systems using <span className="text-blue-600 font-semibold">Python, machine learning, LLM APIs, vector databases, and modern full-stack tools</span>. From conversational assistants to AI learning platforms, I build projects that solve real problems, not just demos.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      I don’t just train models or wire APIs together. I think in systems, build with intention, and adapt fast. Whether it’s <span className="text-blue-600 font-semibold">designing RAG pipelines, integrating AI agents, evaluating model outputs, or deploying ML-backed features</span>, I’m focused on <span className="text-blue-600 font-semibold">delivering useful intelligence</span>.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      If you're <span className="text-blue-600 font-semibold">building something ambitious with AI</span>, let’s team up and make it happen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 lg:sr-only">Experience</h2>
                </div>
                <div>
                  <ol className="group/list">
                    {experiences.map((exp) => (
                      <ExperienceItem key={exp.id} experience={exp} />
                    ))}
                  </ol>
                  <div className="mt-12">
                    <Link
                      className="inline-flex items-center font-medium leading-tight text-gray-900 font-semibold group border-b-2 border-blue-200 hover:border-blue-400 transition-colors pb-1"
                      href="https://docs.google.com/document/d/1rm-5VL9aDxZ0h0cSrzF-TAsgRyf-mKQjCRui4NZHhnA/edit?tab=t.0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <span className="transition group-hover:text-blue-600 motion-reduce:transition-none">
                          View Full Résumé
                        </span>
                        <span className="whitespace-nowrap">
                          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 lg:sr-only">Projects</h2>
                </div>
                <div>
                  <ul className="group/list">
                    {featuredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </ul>
                  <div className="mt-12">
                    <Link
                      className="inline-flex items-center font-medium leading-tight text-gray-900 font-semibold group border-b-2 border-blue-200 hover:border-blue-400 transition-colors pb-1"
                      href="/projects"
                    >
                      <span>
                        <span className="transition group-hover:text-blue-600 motion-reduce:transition-none">
                          View All Projects
                        </span>
                        <span className="whitespace-nowrap">
                          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="max-w-md pb-16 text-sm text-gray-500 sm:pb-0">
                <p>
                  Designed with{" "}
                  <Link
                    href="#"
                    className="font-medium text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors"
                  >
                    Figma
                  </Link>{" "}
                  and built with{" "}
                  <Link
                    href="#"
                    className="font-medium text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors"
                  >
                    Next.js
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="font-medium text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors"
                  >
                    Tailwind CSS
                  </Link>
                  . Deployed on{" "}
                  <Link
                    href="#"
                    className="font-medium text-gray-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors"
                  >
                    Vercel
                  </Link>
                  .
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
