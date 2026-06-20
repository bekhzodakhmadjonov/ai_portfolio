'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="mt-20 text-center">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in working together?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always open to discussing AI products, ML workflows, intelligent automation, or practical ways to turn
          model capabilities into useful software.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="https://www.linkedin.com/in/bexzod-axmadjonov/" target='_blank'>Get In Touch</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-gray-300 hover:border-blue-300 hover:text-blue-600 bg-transparent"
          >
            <Link href="https://docs.google.com/document/d/1Pc29y1PwVcdxbDHvcnXD3dS8H9CJxnNH/edit" target="_blank">View Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
