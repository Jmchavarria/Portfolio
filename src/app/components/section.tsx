
import { ReactNode } from "react"

interface sectionProps {
    children: ReactNode
    id: string
    title: string
    className?: string


}



export const Section: React.FC<sectionProps> = ({ children, id }) => {

    return (
        <div id={id} className="w-full min-h-screen flex flex-col items-center  ">

    

            {children}

        </div>
    )
}