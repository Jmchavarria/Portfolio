import Image from "next/image";

export const ImageProject = ({ imageUrl, title }: { imageUrl: string; title: string }) => {
    return (

        <div className="h-48 w-full relative overflow-hidden rounded-t-xl shrink-0 flex justify-center items-center bg-gray-800 ">

            {imageUrl &&

                <><Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </>
            }

            <p>No image available</p>

        </div>
    )
}