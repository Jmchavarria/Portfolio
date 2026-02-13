export const Profile = () => {
    return (
        <div className=" w-full order-2 lg:order-1 lg:col-span-3 lg:row-span-5 flex flex-col justify-center   gap-6 text-center sm:text-start"  >

            {/* Nuevo Hello */}
            < span className="text-[#FFB17A] text-lg sm:text-xl font-semibold tracking-wide uppercase hidden sm:block" >
                Hello!
            </span >

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
                <span className="text-white">I&apos;m </span>
                <span className="text-[#FFB17A]">Jhon Chavarría</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">
                FullStack Developer
            </h2>

            <p className="max-w-md text-gray-300 ">
                Passionate about crafting seamless, scalable applications that bring ideas to life with great user experiences.
            </p>

        </div >
    )
}   