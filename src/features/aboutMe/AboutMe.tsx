import { AboutImage } from './components/AboutMeImage';
import { Description } from './components/AboutMeDescription';
import { Formation } from './components/formation/Formation';
import { Technologies } from './components/technologies/Technologies';
import { formationItems } from './data/Formation.data';
import { skills } from './data/Skills.data';

const AboutMe = () => {

  return (
    <section id="about"  className="w-full py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                  <AboutImage />
      
                  <div className="lg:w-3/3 space-y-10">
                      <Description />
      
                      <Technologies skills={skills} />
      
                      <Formation items={formationItems} />
      
                  </div>
              </div>
    </section>
  );
};

export default AboutMe;