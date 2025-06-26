"use client";
import { useState } from "react";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/Pin";
import ProjectModal from "./ui/ProjectModal";
import { projects } from "@/data";



const RecentProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalLink, setModalLink] = useState("");

  const handleProjectClick = async (projectId: number) => {
    try {
      // Fetch the HTML content from the public directory
      const response = await fetch(`/projects/project-${projectId}.html`);
      const content = await response.text();
      const project = projects.find(p => p.id === projectId);
      setModalTitle(project?.title || "");
      setModalContent(content);
      setModalLink(project?.link || "");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error loading project details:", error);
    }
  };

  return (
    <div className="my-10" id="projects">
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 lg:gap-y-10 gap-y-0 mx-[-100px]">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              href="#"
              onClick={() => handleProjectClick(item.id)}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {(item.iconLists || []).map((skill, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative group"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={skill.icon} alt={skill.name} className="p-2" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
        title={modalTitle}
        link={modalLink}
      />
    </div>
  );
};

export default RecentProjects;
