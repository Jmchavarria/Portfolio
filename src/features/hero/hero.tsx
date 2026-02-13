"use client";
import { SocialActions } from "./components/SocialActions";
import { Profile } from "./components/Profile";
import { ImagHero } from "./components/image";
import { EmailCopiedToast } from "./components/EmailCopiedToast";
import { socialLinks } from "./data/Hero.data";
import { useCopyEmail } from "./hooks/useCopyEmail";

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

          <ImagHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;