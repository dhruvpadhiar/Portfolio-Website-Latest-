"use client"

import { useRef } from "react"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import TechGrid from "@/components/tech-grid"
import ExperienceTimeline from "@/components/experience-timeline"
import EducationTimeline from "@/components/education-timeline"
import ProjectCard from "@/components/project-card"
import GradientBackground from "@/components/gradient-background"


export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Projects", ref: projectsRef },
    { name: "Education", ref: educationRef },
  ]

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern UI design.",
      image: "/portfolioweb.png?height=300&width=500",
      github: "https://github.com/dhruvpadhiar/Portfolio-Website-Latest-",
      demo: "https://dhruvpadhiar-portfolio.vercel.app/",
      technologies: ["react", "tailwind", "typescript"],
    },
    {
      title: "E-Commerce Platform (PlaceHolder)",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      technologies: ["react", "node", "mongodb", "express"],
    },
    {
      title: "Task Management App (PlaceHolder)",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/username/taskmanager",
      demo: "https://taskmanager-demo.vercel.app",
      technologies: ["react", "nextjs", "tailwind"],
    },
    {
      title: "(PlaceHolder)",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      technologies: ["react", "node", "mongodb", "express"],
    },
    {
      title: "(PlaceHolder)",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      technologies: ["react", "node", "mongodb", "express"],
    },
    {
      title: "(PlaceHolder)",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      technologies: ["react", "node", "mongodb", "express"],
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen text-foreground relative overflow-hidden">
      <GradientBackground />

      <Navbar items={navItems} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Home Section */}
        <section ref={homeRef} className="min-h-screen flex flex-col justify-center py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/dhruvpadhiar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-padhiar-2b1b41334/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="dhruvpadhiar521@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Mail size={28} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="blurry-card rounded-full px-6 py-2 mb-4 from-teal-500/10">
              <span className="text-teal-600 dark:text-teal-400 font-roboto">Software Engineer</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 font-outfit bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500"
            >
              Dhruv Padhiar
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center justify-center mb-4 text-muted-foreground">
              <MapPin size={16} className="mr-1 text-teal-500" />
              <span className="text-sm font-roboto">Mumbai, India</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-center max-w-2xl mx-auto text-foreground/80 font-roboto leading-relaxed text-sm md:text-base"
            >
              I develop fast and user-friendly web applications with a focus on efficiency and usability.I enjoy solving complex problems through clean and effective code using modern technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center mt-10">
              <Button
                onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full px-8 shadow-lg shadow-teal-500/20 dark:shadow-teal-500/10"
              >
                Explore My Work
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-outfit">Technologies I Work With</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechGrid />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center font-outfit">Experience</h2>
          </motion.div>

          <ExperienceTimeline />
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-outfit">Projects</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-outfit">Education</h2>
          </motion.div>

          <EducationTimeline />
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-border/30">
          <div className="flex flex-col items-center">
            <div className="blurry-card rounded-full px-6 py-2 mb-4 from-teal-500/10">
              <h3 className="text-xl font-bold font-outfit">Dhruv Padhiar</h3>
            </div>

            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/dhruvpadhiar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-padhiar-2b1b41334/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="dhruvpadhiar521@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>

            <p className="text-muted-foreground text-center font-roboto text-sm">
              © {new Date().getFullYear()} Dhruv Padhiar.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

