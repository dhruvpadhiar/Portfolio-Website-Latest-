"use client"

import type { ReactNode } from "react"
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaJs, FaDatabase } from "react-icons/fa"
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { motion } from "framer-motion"

interface TechItemProps {
  icon: ReactNode
  name: string
  description: string
  index: number
}

const TechItem = ({ icon, name, description, index }: TechItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div className="blurry-card p-4 rounded-xl border border-border/50 hover:border-teal-500/50 transition-all duration-300 flex flex-col items-center text-center group hover:bg-background/80 from-teal-500/5">
      <div className="text-3xl mb-2 text-teal-500 dark:text-teal-400 group-hover:text-teal-400 dark:group-hover:text-teal-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-1 font-outfit">{name}</h3>
      <p className="text-muted-foreground text-xs font-roboto">{description}</p>
    </div>
  </motion.div>
)

export default function TechGrid() {
  const technologies = [
    {
      icon: <FaReact />,
      name: "React.js",
      description: "UI Development",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "Backend Runtime",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      description: "NoSQL Database",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      description: "Web Framework",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      description: "Markup Language",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "Utility-first CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      description: "React Framework",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      description: "Version Control",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      description: "Programming Language",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      description: "Query Language",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
      {technologies.map((tech, index) => (
        <TechItem key={index} icon={tech.icon} name={tech.name} description={tech.description} index={index} />
      ))}
    </div>
  )
}

