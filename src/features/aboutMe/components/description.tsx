import { SectionTitle } from "@/app/components/sectionTitle"

export const Description = () => {
    return (
        <div>
            <SectionTitle title='About Me' className='text-4xl md:text-4xl font-bold flex-start mb-6 text-[#FFFDED] flex flex-start' />


            <div

                className="mb-8 text-gray-300 "
            >
                <p className="text-base md:text-lg leading-relaxed mb-6">
                    Full-stack developer with one year of experience building scalable and user-centric web applications.
                    Skilled in <span className="text-[#FFB17A]">React, Next.js, Node.js, and Supabase</span>, with a strong focus on clean code, teamwork, and continuous learning.
                    I love tackling technical challenges and delivering efficient, innovative solutions.
                </p>


            </div>

        </div>

    )
}