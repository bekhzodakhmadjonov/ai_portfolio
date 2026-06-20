'use client'

import Link from "next/link"
import { ExternalLink } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blue-50 lg:group-hover:shadow-lg lg:group-hover:border lg:group-hover:border-blue-100"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-gray-900 hover:text-blue-600 focus-visible:text-blue-600 group/link text-base transition-colors"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {project.title}{" "}
                <span className="inline-block">
                  <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal text-gray-600">{project.description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt={project.title}
          loading="lazy"
          width="200"
          height="120"
          decoding="async"
          className="rounded-lg border border-gray-200 transition group-hover:border-blue-300 group-hover:shadow-md sm:order-1 sm:col-span-2 sm:translate-y-1"
          src={project.image || "/placeholder.svg"}
        />
      </div>
    </li>
  )
}
