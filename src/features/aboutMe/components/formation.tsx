import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { FiCalendar, FiMapPin } from "react-icons/fi"

export const Formation = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" max-w-3xl"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#FFFDED]">Formation</h2>
            </div>

            <div className="gap-5">

                <div className="flex gap-3">

                    <GraduationCap className="w-8 h-8 flex gap-10 " />

                    <div className="flex flex-col justify-between  w-full">

                        <div className="flex justify-between">

                            <span className="font-normal text-gray-300 text-base">
                                Tecnólogo en Análisis y Desarrollo de Software
                            </span>


                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <FiCalendar />
                                <span className="font-semibold text-sm">2 years</span>
                            </div>

                        </div>

                        <div className="flex justify-between">

                            <span className="text-sm text-[#ffb17a]">
                                Servicio Nacional de Aprendizaje SENA
                            </span>

                            <div className="flex items-center gap-2 text-gray-400 text-sm ">
                                <FiMapPin />
                                Medellín
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    )
}