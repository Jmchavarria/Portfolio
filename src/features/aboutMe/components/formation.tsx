import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { FiCalendar, FiMapPin } from "react-icons/fi"

export const Formation = () => {

    return (


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
        >
            {/* Encabezado con título y calendario */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#FFFDED]">Formation</h2>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar />
                    <span className="font-semibold text-sm">2 years</span>
                </div>
            </div>

            {/* Contenido de la formación */}
            <div className="gap-5 flex">
                <GraduationCap className="w-8 h-8" />

                <div className="flex flex-col gap-1.5">
                    <span className="font-normal text-gray-300 text-base">
                        Tecnólogo en Análisis y Desarrollo de Software
                    </span>
                    <span className="text-sm text-[#ffb17a]">
                        Servicio Nacional de Aprendizaje SENA
                    </span>

                    <div className="flex items-center gap-2 text-gray-400 text-sm ">
                        <FiMapPin />
                        Medellín
                    </div>
                </div>
            </div>
        </motion.div>
    )
}