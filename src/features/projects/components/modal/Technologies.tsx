import { getTechnologyIcon } from "@/utils/getTechnologyIcon"

export const GridTechnlogies = ({ technologies, features }: { technologies?: string[], features?: string[] }) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {technologies && technologies.length > 0 && (
        <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-black/40 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                title={tech}
              >
                {getTechnologyIcon(tech)}
                <span className="text-xs sm:text-sm text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Characteristics</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-gray-300">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 group"
              >
                <div className="w-1.5 h-1.5 bg-linear-to-r from-[#ffb17a] to-[#ff9e5c] rounded-full mt-2 group-hover:scale-125 transition-transform duration-200" />
                <span className="flex-1 text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
}
