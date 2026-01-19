export interface CardProps {
    experience: Experience
    index?: number
}

export interface Experience {
    title: string
    company: string
    period: string
    description: string
    location: string
}