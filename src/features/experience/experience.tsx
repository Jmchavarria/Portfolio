"use client";
import { SectionTitle } from "@/app/components/sectionTitle";
import { Card } from "./components/card";

const Experience = () => {

  return (

    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <SectionTitle title="Experience" className="text-4xl md:text-4xl font-bold mb-4 text-[#FFFDED]" />

      <Card />
    </section>
  );
};

export default Experience;