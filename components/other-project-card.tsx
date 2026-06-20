'use client'

import Link from "next/link"
import { Github, ExternalLink, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects-data"

interface OtherProjectCardProps {
  project: Project
}

export function OtherProjectCard({ project }: OtherProjectCardProps) {
  return (
    <div
      key={project.id}
      className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
    >
      <div className="mb-4">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg border border-gray-100 group-hover:border-blue-200 transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
          {project.status}
        </Badge>
        <span className="text-xs text-gray-500">{project.year}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
            +{project.technologies.length - 3}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center">
            <Star className="w-3 h-3 mr-1" />
            {project.stats.stars}
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {project.stats.forks}
          </span>
        </div>
        <span>{project.team}</span>
      </div>

      <div className="flex gap-2">
        <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700 flex-1">
          <Link href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="w-3 h-3 mr-1" />
            Demo
          </Link>
        </Button>
        <Button
          size="sm"
          variant="outline"
          asChild
          className="border-gray-300 hover:border-blue-300 bg-transparent"
        >
          <Link href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github className="w-3 h-3" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
