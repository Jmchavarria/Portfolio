import Image from "next/image"

export const ImagHero = () => {
    return (

        <div className="order-1 lg:order-2 lg:col-span-2 lg:row-span-5 flex items-center justify-center">
            <div className="relative group">
                <Image
                    src="/images/imgportfolio.webp"
                    alt="Jhon Marlon Chavarría Cuervo"
                    width={300}
                    height={400}
                    quality={85}
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                    className="object-cover rounded-xl shadow-lg w-60 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96"
                    priority
                />
                <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
            </div>
        </div>

    )
}