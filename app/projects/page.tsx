import { Github, ExternalLink, Calendar, Users, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { FeaturedProjectCard } from "@/components/featured-project-card"
import { OtherProjectCard } from "@/components/other-project-card"
import { CallToAction } from "@/components/call-to-action"

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">All Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of AI, machine learning, and intelligent product work I've built over the years, ranging from
            LLM-powered assistants to data-driven learning platforms. Each project represents a practical challenge in
            turning models into usable products.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  )
}
