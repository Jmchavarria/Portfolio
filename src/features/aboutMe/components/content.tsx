import { Technologies } from "./technologies/technologies"
import { Formation } from "./formation"
import { AboutImage } from "./image"
import { Description } from "./description"
import { skills } from "../data/skills"

export const Content = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <AboutImage />

            <div className="lg:w-3/3 space-y-10">
                <Description />

                <Technologies skills={skills} />

                <Formation />

            </div>
        </div>
    )
}