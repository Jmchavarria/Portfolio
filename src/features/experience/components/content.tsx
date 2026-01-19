import { FiCalendar, FiMapPin } from "react-icons/fi";
import { Experiences } from "../data/experiences";

export const Content = () => {
    return (
        <>
            {Experiences.map((item, index) => (
                <div key={index} className="relative sm:pl-20">
                    {/* ✅ punto por cada experiencia */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-[#ffb17a] rounded-full border-4 border-black hidden sm:inline" />

                    <div className="w-full bg-zinc-900/50 p-8 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div className="flex flex-col order-2 sm:order-1">
                                <h3 className="text-xl font-bold text-gray-300 mb-1">{item.title}</h3>
                                <div className="flex items-center gap-2 text-[#ffb17a] font-semibold mb-2">
                                    {item.company}
                                </div>
                            </div>

                            <div className="flex justify-between sm:flex-col sm:items-end gap-1 order-1 sm:order-2 mb-2 sm:mb-0">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <FiCalendar size={14} />
                                    {item.period}
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <FiMapPin size={14} />
                                    {item.location}
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};
