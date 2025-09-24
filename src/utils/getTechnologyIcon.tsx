import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiCloudflare,
  SiPrisma,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiPostgresql
} from 'react-icons/si';

export const getTechnologyIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  const iconProps = { size: 20, className: "text-white" };

  switch (techLower) {
    case 'react':
      return <SiReact {...iconProps} className="text-[#61DAFB]" />;
    case 'node.js':
    case 'nodejs':
      return <SiNodedotjs {...iconProps} className="text-[#339933]" />;
    case 'mongodb':
      return <SiMongodb {...iconProps} className="text-[#47A248]" />;
    case 'tailwindcss':
    case 'tailwind':
      return <SiTailwindcss {...iconProps} className="text-[#06B6D4]" />;
    case 'next.js':
    case 'nextjs':
      return <SiNextdotjs {...iconProps} className="text-white" />;
    case 'supabase':
      return <SiSupabase {...iconProps} className="text-[#3ECF8E]" />;
    case 'cloudflare workers':
    case 'cloudflare':
      return <SiCloudflare {...iconProps} className="text-[#F38020]" />;
    case 'orm prisma':
    case 'prisma':
      return <SiPrisma {...iconProps} className="text-[#2D3748]" />;
    case 'javascript':
    case 'js':
      return <SiJavascript {...iconProps} className="text-[#F7DF1E]" />;
    case 'typescript':
    case 'ts':
      return <SiTypescript {...iconProps} className="text-[#3178C6]" />;
    case 'html5':
    case 'html':
      return <SiHtml5 {...iconProps} className="text-[#E34F26]" />;
    case 'css3':
    case 'css':
      return <SiCss3 {...iconProps} className="text-[#1572B6]" />;
    case 'express':
    case 'express.js':
      return <SiExpress {...iconProps} className="text-white" />;
    case 'mysql':
      return <SiMysql {...iconProps} className="text-[#4479A1]" />;
    case 'postgresql':
    case 'postgres':
      return <SiPostgresql {...iconProps} className="text-[#4169E1]" />;
    default:
      return <span className="text-xs px-2 py-1 bg-[#e89c62] text-black rounded-full">{tech}</span>;
  }
};