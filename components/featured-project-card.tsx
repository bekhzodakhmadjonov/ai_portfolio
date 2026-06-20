'use client'

import Link from "next/link"
import { Github, ExternalLink, Calendar, Users, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects-data"

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  return (
    <div
      key={project.id}
      className={`group relative grid gap-8 lg:gap-12 ${
        index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
      }`}
    >
      <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative overflow-hidden rounded-xl border border-gray-200 group-hover:border-blue-300 transition-colors">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 lg:h-80 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {project.status}
          </Badge>
          <span className="text-sm text-gray-500 flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {project.year}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {project.team}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 mr-1" />
            {project.stats.stars}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {project.stats.forks}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {project.stats.commits} commits
          </div>
        </div>

        <div className="flex gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gray-300 hover:border-blue-300 hover:text-blue-600 bg-transparent"
          >
            <Link href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
