"use client";
import { SocialActions } from "./components/SocialActions";
import { Profile } from "./components/Profile";
import { EmailCopiedToast } from "./components/EmailCopiedToast";
import { socialLinks } from "./data/Hero.data";
import { useCopyEmail } from "./hooks/useCopyEmail";
import { ImageCard } from "@/shared/ui/ImageCard";

const Hero = () => {
  const { copyEmail, showCopiedAlert } = useCopyEmail();

  return (
    <section className="bg-black text-white min-h-screen flex items-center relative">
      <div className="flex flex-col  lg:grid-cols-5 lg:grid-rows-5  w-full lg:p-16 ">
        <EmailCopiedToast showCopiedAlert={showCopiedAlert} />
        <div className="flex flex-col-reverse lg:flex-row 
                      w-full p-10 justify-between items-center gap-10">

          <div className="space-y-10 justify-center  ">
            <Profile />
            <SocialActions copyEmail={copyEmail} socialLinks={socialLinks} />
          </div>
          <div className="relative">


            <ImageCard alt="Image hero" src="/images/imgportfolio.webp" containerClassName="rounded-xl w-64 h-80 md:w-72 md:h-96 border border-white/20 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;