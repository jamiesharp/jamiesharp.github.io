
import React from "react";

import { FaChevronDown } from "react-icons/fa";
import { Mail } from 'lucide-react';

import { Spotlight } from "./ui/Spotlight-new";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { skillItems } from "@/data";

const Hero = () => {
  return (
    <div>
      {/* UI: Spotlight-new (https://ui.aceternity.com/components/spotlight-new) */}
      <Spotlight />

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

    
      <div className="flex justify-center relative z-10 my-16 w-[80%] mx-auto">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <div className="flex justify-center w-full gap-2 mb-12 md:mb-20">
              <a href="mailto:jamiesharp12345@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-filter backdrop-blur-lg">
              <Mail />
            </a>

            <a href="https://github.com/jamiesharp" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-filter backdrop-blur-lg">
              <img src="/git.svg" alt="GitHub" width={24} height={24} />
            </a>
          </div>

          {/* UI: TextGenerateEffect (https://ui.aceternity.com/components/text-generate-effect) */}
          <TextGenerateEffect
            words="Transforming Raw Data into Valuable Insights"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Jamie, a Data Analyst based in Northampton, UK.
          </p>

          {/* Skills */}
          <p className="text-xs md:text-sm font-semibold text-center text-purple tracking-widest py-5 pt-10">CONFIDENTLY WORKING WITH</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10 pb-10">
            {skillItems.map((skill) => (
              <React.Fragment key={skill.id}>
                <div className="flex md:max-w-60 max-w-32 relative group justify-center items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={skill.id === 4 || skill.id === 5 ? 100 : 150}
                    className="md:w-20 w-16"
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
                    {skill.name}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Projects scroll prompt */}
          <div className="flex flex-col items-center gap-2 mt-8 animate-bounce">
            <span className="text-sm text-gray-400">Scroll for Portfolio Projects</span>
            <FaChevronDown className="text-gray-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
