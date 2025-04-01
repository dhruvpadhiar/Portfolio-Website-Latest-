import { GraduationCap, Calendar } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  duration: string
  description: string
}

export default function EducationCard({ degree, institution, duration, description }: EducationCardProps) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:bg-gray-800/60">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
          <GraduationCap className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-outfit">{institution}</h3>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-2 font-outfit">{degree}</h4>

      <div className="flex items-center mb-4 text-gray-400">
        <Calendar className="h-4 w-4 mr-2" />
        <span className="text-sm font-roboto">{duration}</span>
      </div>

      <p className="text-gray-300 font-roboto">{description}</p>
    </div>
  )
}

