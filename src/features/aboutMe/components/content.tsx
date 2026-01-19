
import { Technologies } from "./technologies"
import { Formation } from "./formation"
import { AboutImage } from "./image"
import { Description } from "./description"

export const Content = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col  lg:flex-row gap-10 lg:gap-16 items-center">
            <AboutImage />

            <div className="lg:w-3/3 ">
                <Description />

                <Technologies />

                <Formation />

            </div>
        </div>
    )
}