import { SectionTitle } from "@/app/components/sectionTitle";
import { Content } from "./content";

export const Card = () => {
    return (
            <div className="max-w-4xl w-full space-y-12">
                <SectionTitle title="Experience" className="text-4xl md:text-4xl font-bold mb-4 text-[#FFFDED]" />

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#ffb17a] via-[#ffb17a]/50 to-transparent hidden sm:inline" />
                    <div className="space-y-12">
                        <Content />
                    </div>
                </div>
            </div>
    );
};
