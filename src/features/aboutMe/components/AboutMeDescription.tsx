import { SectionHeader } from "@/shared/ui/sectionHeader";

export const Description = () => {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Sobre mí"
        description={
          <>
            Soy desarrollador Full Stack con{" "}
            <span className="text-[#F5F5F5] font-medium">
              2 años de experiencia
            </span>{" "}
            construyendo aplicaciones web modernas y escalables.
            <br />
            <br />
            Trabajo principalmente con{" "}
            <span className="text-[#38BDF8] font-medium">
              TypeScript, React, Next.js y Node.js
            </span>
            , aplicando buenas prácticas, arquitecturas limpias y APIs
            eficientes.
            <br />
            <br />
            Me interesa especialmente crear soluciones que combinen{" "}
            <span className="text-[#7C3AED] font-medium">
              desarrollo de software, automatización e inteligencia artificial
            </span>
            .
          </>
        }
      />
    </div>
  );
};
