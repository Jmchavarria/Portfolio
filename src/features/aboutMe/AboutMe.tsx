import { ImageCard } from '@/shared/ui/ImageCard';
import { Description } from './components/AboutMeDescription';
import { Formation } from './components/formation/Formation';
import { Technologies } from './components/technologies/Technologies';
import { formationItems } from './data/Formation.data';
import { skills } from './data/Skills.data';
import { motion } from 'framer-motion';

const AboutMe = () => {

  return (
    <section id="about" className="w-full py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">


        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 flex justify-center relative"
        >
          <ImageCard alt='Image About Me' src="/images/aboutMeImage.png" containerClassName='w-64 h-80 md:w-72 md:h-96'
          
          />
        </motion.div>

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