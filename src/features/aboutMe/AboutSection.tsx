"use client";
import {  useRef } from 'react';
import { Content } from './components/content';

const AboutSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" ref={sectionRef} className="w-full py-16 px-6 md:px-12  text-white ">
      <Content />
    </section>
  );
};

export default AboutSection;