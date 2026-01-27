import { projects } from "@/features/projects/data/projects";

interface paginationIndicatorsProps {
    currentIndex: number
    goToSlide: (index: number) => void
    itemsToShow: number
}

export const PaginationIndicators = ({ currentIndex, goToSlide, itemsToShow }: paginationIndicatorsProps) => {
    return (
        <div>
            {projects.length > itemsToShow && (
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: Math.max(1, projects.length - itemsToShow + 1) }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-[#ffb17a] w-8' : 'bg-gray-300 w-2 hover:bg-gray-200'}`}
                            aria-label={`Ir a proyecto ${idx + 1}`}
                        />
                    ))}

                </div>
            )}

            <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm">
                    Showing {Math.min(itemsToShow, projects.length)} de {projects.length} projects
                </p>
            </div>

        </div>
    )
}