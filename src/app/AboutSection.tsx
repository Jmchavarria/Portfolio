import { Download, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from 'react-icons/si'

const AboutMePreview = () => {
  return (
    <div className="bg-gray-900 p-4 min-h-screen">
      <section className="w-full bg-[#0a0a1a] text-white p-6 md:p-10 rounded-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 relative z-10">
          {/* Columna izquierda */}
          <div className="lg:w-full">
            <h1 className="text-4xl font-bold mb-8 font-stalinist_one">About <span className='text-violet-400'>Me</span></h1>

            {/* Quien soy */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Soy Jhon Marlon Chavarría Cuervo, desarrollador Full Stack con experiencia en la creación de aplicaciones web robustas, escalables y seguras. He trabajado en proyectos reales aplicando tecnologías modernas como React.js, Tailwind CSS, Node.js, Nest.js, y herramientas de infraestructura como Docker y Jest.js para pruebas automatizadas.
              </p>
            </div>

            {/* Skills con iconos */}
            <div className="flex justify-around items-center mb-8 border-t border-b border-gray-800 py-6 w-full">
              <div className="flex flex-col items-center">
                <SiReact className="text-[#58c4dc] text-4xl" />
                <p className="text-xs text-gray-400 mt-2">React</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center bg-white rounded-full ">
                  <SiNextdotjs className="text-4xl text-black" />
                </div>
                <p className="text-xs text-gray-400 mt-2">Next.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNodedotjs className="text-[#55a445] text-4xl" />
                <p className="text-xs text-gray-400 mt-2">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-[#00ed64] text-4xl" />
                <p className="text-xs text-gray-400 mt-2">Mongo Db</p>
              </div>
            </div>

            {/* Qué hacemos */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold">What We Do</h2>
                <div className="w-4 h-4 rounded-full bg-violet-600"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0f1029] p-4 rounded-lg">
                  <div className="w-12 h-12 bg-[#151740] rounded-lg flex items-center justify-center mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                      <path d="M9 10L7 12L9 14" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 10L17 12L15 14" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-1">Application Design</h3>
                  <p className="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="bg-[#0f1029] p-4 rounded-lg">
                  <div className="w-12 h-12 bg-[#151740] rounded-lg flex items-center justify-center mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                      <path d="M12 7L9 12L12 17L15 12L12 7Z" stroke="#8b5cf6" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-1">Graphic Design</h3>
                  <p className="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePreview;
