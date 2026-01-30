import { Mail } from "lucide-react"

export const ShowAlert = ({ showCopiedAlert }: { showCopiedAlert: boolean }) => {
    return (
        <div>

            {showCopiedAlert && (
                <div className="fixed  left-1/2 bottom-6 -translate-x-1/2 -translate-y-1/2 
                  z-50 bg-[#FFB17A] text-black px-6 py-3 rounded-lg 
                  shadow-lg animate-pulse">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="font-medium">Email copied to clipboard!</span>
                    </div>
                </div>
            )}

        </div>

    )
}