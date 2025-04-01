"use client"

import { CalendarDays, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Kapstech Inc.",
    location: "Mumbai",
    duration: "July 2022 - August 2022",
    description:
      "Hands-on experience with cloud computing, explored cloud architecture and server types, and attended seminars on XEOX and Microsoft Azure.",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500 transform -translate-x-1/2 timeline-line"></div>

      {experiences.map((experience, index) => (
        <div key={index} className="relative mb-12">
          {/* Timeline dot */}
          <div className="absolute left-1/2 top-6 w-8 h-8 rounded-full bg-teal-500 border-4 border-background transform -translate-x-1/2 flex items-center justify-center z-10 timeline-dot">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>

          {/* Content - alternating sides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side (odd indexes) */}
            <motion.div
              className={cn("md:text-right timeline-content", index % 2 === 0 ? "md:block" : "md:invisible")}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {index % 2 === 0 && (
                <div className="blurry-card rounded-xl hover:border-teal-500/50 transition-all duration-300 from-teal-500/5">
                  <div className="p-5">
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500 text-xl font-bold mb-2 font-outfit">{experience.title}</h3>
                    <div className="flex items-center md:justify-end mb-3 text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">{experience.duration}</span>
                    </div>
                    <div className="flex items-center md:justify-end mb-3 text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">
                        {experience.company}, {experience.location}
                      </span>
                    </div>
                    <p className="text-foreground/80 font-roboto text-sm leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right side (even indexes) */}
            <motion.div
              className={cn("md:col-start-2 timeline-content", index % 2 === 1 ? "md:block" : "md:invisible")}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {index % 2 === 1 && (
                <div className="blurry-card rounded-xl hover:border-teal-500/50 transition-all duration-300 from-teal-500/5">
                  <div className="p-5">
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500 text-xl font-bold mb-2 font-outfit">{experience.title}</h3>
                    <div className="flex items-center mb-3 text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">{experience.duration}</span>
                    </div>
                    <div className="flex items-center mb-3 text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">
                        {experience.company}, {experience.location}
                      </span>
                    </div>
                    <p className="text-foreground/80 font-roboto text-sm leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}

