import { SectionHeader } from "@/shared/ui/sectionHeader"

export const Description = () => {
    return (
        <div className="space-y-6">
            <SectionHeader  title='About Me' description={
                <>
                    Full-stack developer with one year of experience building scalable and user-centric web applications.
                    Skilled in <span className="text-[#FFB17A]">React, Next.js, Node.js, and Supabase</span>, with a strong focus on clean code, teamwork, and continuous learning.
                    I love tackling technical challenges and delivering efficient, innovative solutions.
                </>}
            />
        </div>

    )
}