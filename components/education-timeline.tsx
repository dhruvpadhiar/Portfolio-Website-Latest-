"use client"

import { CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Technology in Information Technology with an Honors in DevOps",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    duration: "2023 - 2026",
    description:
      "Cumulative GPA: 9.23/10.0. Relevant Coursework: Machine Learning, Data Warehousing and Mining, Big Data Analytics, Advanced Data Structures and Algorithms, and DevOps.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Shri Bhagubhai Mafatlal Polytechnic",
    duration: "2020 - 2023",
    description: "Grade: 91.4%. Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
  },
]

export default function EducationTimeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500 transform -translate-x-1/2 timeline-line"></div>

      {education.map((item, index) => (
        <div key={index} className="relative mb-12">
          {/* Timeline dot */}
          <div className="absolute left-1/2 top-6 w-8 h-8 rounded-full bg-teal-500 border-4 border-background transform -translate-x-1/2 flex items-center justify-center z-10 timeline-dot">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>

          {/* Content - alternating sides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side (even indexes) */}
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
                    <h3 className="text-xl font-bold mb-2 font-outfit">{item.institution}</h3>
                    <h4 className="text-lg font-semibold mb-2 font-outfit">{item.degree}</h4>
                    <div className="flex items-center md:justify-end mb-3 text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">{item.duration}</span>
                    </div>
                    <p className="text-foreground/80 font-roboto text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right side (odd indexes) */}
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
                    <h3 className="text-xl font-bold mb-2 font-outfit">{item.institution}</h3>
                    <h4 className="text-lg font-semibold mb-2 font-outfit">{item.degree}</h4>
                    <div className="flex items-center mb-3 text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span className="text-sm font-roboto">{item.duration}</span>
                    </div>
                    <p className="text-foreground/80 font-roboto text-sm leading-relaxed">{item.description}</p>
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

