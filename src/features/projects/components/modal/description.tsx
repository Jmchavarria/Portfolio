export const Description = ({ longDescription }: { longDescription: string }) => {
  return (

    <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Description</h3>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        {longDescription}
      </p>
    </div>
  )

}