"use client";

import { motion } from "framer-motion";
import { SocialActions } from "./components/SocialActions";
import { Profile } from "./components/Profile";
import { EmailCopiedToast } from "./components/EmailCopiedToast";
import { socialLinks } from "./data/Hero.data";
import {
  useHeroAnimations,
  heroContainerVariants,
  headerVariants,
  profileVariants,
  socialActionsVariants,
  circleVariants,
  footerVariants,
} from "./hooks/use-hero-animations";

const Hero = () => {
  const {
    copyEmail,
    showCopiedAlert,
    glowX,
    glowY,
    circleX,
    circleY,
    handleMouseMove,
  } = useHeroAnimations();

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariants}
    >
      <EmailCopiedToast showCopiedAlert={showCopiedAlert} />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(124,58,237,0.14), transparent 30%)`,
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#38BDF8]/4 blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[500px] w-[500px] rounded-full bg-[#7C3AED]/6 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "70px 70px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <motion.header
          className="flex items-center justify-between"
          variants={headerVariants}
        >
          <span className="hidden text-sm text-[#8B8B93] sm:block">
            Medellín, Colombia
          </span>
        </motion.header>

        <div className="flex flex-1 items-center py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" variants={profileVariants}>
              <Profile />

              <motion.div className="mt-10" variants={socialActionsVariants}>
                <SocialActions
                  copyEmail={copyEmail}
                  socialLinks={socialLinks}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:col-span-2 lg:flex lg:justify-end"
              style={{
                x: circleX,
                y: circleY,
              }}
              variants={circleVariants}
            >
              <motion.div
                className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/8"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute h-56 w-56 rounded-full border border-[#7C3AED]/30"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute h-40 w-40 rounded-full bg-[#7C3AED]/10 blur-2xl"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute h-24 w-24 rounded-full bg-[#38BDF8]/10 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.span
                  className="relative text-7xl font-bold tracking-tighter text-white/6"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  JS
                </motion.span>

                <motion.span
                  className="absolute -right-3 top-10 h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.8)]"
                  animate={{
                    y: [0, 15, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.span
                  className="absolute -bottom-1 left-16 h-1.5 w-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.8)]"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.2, 0.9, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-between border-t border-white/8 pt-5 text-xs text-[#55555D]"
          variants={footerVariants}
        >
          <span>Full Stack Developer</span>

          <motion.span
            className="text-[#66666E]"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore ↓
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
