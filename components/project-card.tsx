"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa"
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript  } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectProps {
  project: {
    title: string
    description: string
    image: string
    github: string
    demo: string
    technologies: string[]
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
        return <FaReact className="text-teal-400" />
      case "node":
        return <FaNodeJs className="text-green-500" />
      case "mongodb":
        return <SiMongodb className="text-green-400" />
      case "express":
        return <SiExpress className="text-gray-400" />
      case "nextjs":
        return <SiNextdotjs className="text-white dark:text-white text-opacity-90" />
      case "tailwind":
        return <SiTailwindcss className="text-cyan-400" />
      case "javascript":
        return <FaJs className="text-yellow-400" />
      case "typescript":
        return <SiTypescript className="text-blue-500" />;
      case "framer":
        return <span className="text-purple-400 text-xs font-bold">FM</span>
      default:
        return null
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="blurry-card rounded-xl overflow-hidden border border-border/50 hover:border-teal-500/50 transition-all duration-300 group from-teal-500/5"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 font-outfit">{project.title}</h3>
        <p className="text-muted-foreground text-xs mb-3 font-roboto leading-relaxed">{project.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {project.technologies.map((tech, index) => (
              <div key={index} className="w-5 h-5">
                {getTechIcon(tech)}
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-teal-500 transition-colors h-7 w-7 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-teal-500 transition-colors h-7 w-7 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

