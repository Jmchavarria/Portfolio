
import { useCopyEmail } from "../hooks/useCopyEmail";
import Image from "next/image";
import { socialLinks } from "../data/data";
import { Download, Mail } from "lucide-react";
import { ImagHero } from "./image";
import { Buttons } from "./buttons";
import { HeroInfo } from "./heroInfo";
import { ShowAlert } from "./showAlert";

export const Content = () => {
    const { copyEmail, showCopiedAlert } = useCopyEmail();
    return (

        <div className="flex flex-col  lg:grid-cols-5 lg:grid-rows-5  w-full lg:p-16 ">
            <ShowAlert showCopiedAlert={showCopiedAlert} />
            <div className="flex flex-col-reverse lg:flex-row 
                w-full p-10 justify-between items-center gap-10">

                {/* Texto */}
                <div className="space-y-10 justify-center  ">
                    <HeroInfo />
                    <Buttons copyEmail={copyEmail} socialLinks={socialLinks} />
                </div>

                {/* Imagen */}
                <ImagHero />
            </div>


        </div>

    )
}