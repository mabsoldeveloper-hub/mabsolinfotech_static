"use client";

import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import SplitText from "@/components/SplitText";
export default function HomePage() {

  return (
    <div>
      <header className="relative w-full overflow-hidden text-white bg-[#1e3a8a]">

        {/* PARTICLES BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleCount={300}
            particleSpread={10}
            speed={0.2}
            particleColors={["#ffffff"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
          />
        </div>

        {/* MAIN CONTENT */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 py-28 flex flex-col items-center justify-center text-center">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 flex flex-col items-center"
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {/* SPLIT TEXT ANIMATION */}
              <SplitText
                text="Smart Solutions for"
                className="text-4xl md:text-5xl font-semibold text-center text-white max-w-3xl"
                delay={50}
                duration={1.00}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={() => {
                }}
              /><br />
              <span className="text-orange-400 drop-shadow">
                {/* Smarter Business Management */}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl italic font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white/90">You Imagine.</span>{" "}
              <span className="bg-orange-400 text-white px-4 py-1 font-bold rounded-sm shadow">
                We Create.
              </span>
            </motion.p>

            {/* SPLIT TEXT ANIMATION */}
            <SplitText
              text="Empowering Businesses with Smart ERP & Cloud Solutions"
              className="text-lg md:text-2xl font-semibold text-center text-white max-w-3xl mb-20"
              delay={5}
              duration={1.00}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={() => {
                console.log("All letters have animated!");
              }}
            />
          </motion.div>

        </section>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20">
          <svg
            viewBox="0 0 1440 120"
            className="w-full relative -bottom-[1px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,69.3C672,75,768,53,864,42.7
           C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,120L0,120Z"
            />
          </svg>
        </div>
      </header>

    </div>
  );
}
