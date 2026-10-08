import { Check, Mail } from "lucide-react";

export const EmailCopiedToast = ({
  showCopiedAlert,
}: {
  showCopiedAlert: boolean;
}) => {
  if (!showCopiedAlert) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2">
      <div className="flex items-center gap-2.5 rounded-xl border border-[#1F1F23] bg-[#0D0D0F]/95 px-4 py-3 text-sm text-[#F5F5F5] shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
          <Mail size={15} />
        </div>

        <span>Correo copiado al portapapeles</span>

        <Check size={15} className="text-[#38BDF8]" />
      </div>
    </div>
  );
};
