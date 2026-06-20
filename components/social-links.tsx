'use client'

import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-blue-600 transition-colors"
          href="https://github.com/bekhzodakhmadjonov"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-6 w-6" />
        </Link>
      </li>
      <li className="mr-5 text-xs">
        <Link
          className="block hover:text-blue-600 transition-colors"
          href="https://www.linkedin.com/in/bexzod-axmadjonov/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
      </li>
      <li className="mr-5 text-xs">
        <Link className="block hover:text-blue-600 transition-colors" href="mailto:bexzodaxmadjonovx@gmail.com">
          <Mail className="h-6 w-6" />
        </Link>
      </li>
    </ul>
  )
}
