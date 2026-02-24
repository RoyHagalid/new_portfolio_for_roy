import React from "react";
import ProjectNavigation from "../(project pagination)/ProjectNavigation";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

import { PortableTextMarkComponentProps } from "@portabletext/react";

const portableTextComponents = {
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps) => <strong>{children}</strong>,
    em: ({ children }: PortableTextMarkComponentProps) => <em>{children}</em>,
    link: ({ value, children }: PortableTextMarkComponentProps) => (
      <a href={typeof value === 'object' && value?.href ? value.href : value} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="mb-4 whitespace-pre-line">{children}</p>,
  },
};
import ProjectImageContainer from "./ProjectImageContainer";
import ProjectImageContainerMobile from "./ProjectImageContainerMobile";
import ExitButton from "./ExitButton";
import ProjectButtonLeft from "../(project pagination)/ProjectButtonLeft";
import ProjectButtonRight from "../(project pagination)/ProjectButtonRight";

type Props = {
  project: Project;
  projectIndex: number;
  goback: () => void;
  nextProject: () => void;
  setToggleDisplay: (value: boolean) => void;
  goTothisIndex: (index: number) => void;
  circleIndex: number;
};
const ProjectInfoCard = ({
  project,
  projectIndex,
  goback,
  nextProject,
  goTothisIndex,
  setToggleDisplay,
  circleIndex,
}: Props) => {
  return (
    <article className="bg-[#E8D5B0] bg-svg-pattern-stain bg-center bg-no-repeat bg-contain border-[1px] overflow-visible shadow-project-card relative z-[10000] w-full max-w-[100vw] md:max-w-[70vw] max-h-[100vh] min-h-[60vh] md:min-h-[600px] flex flex-col justify-between md:rounded-2xl">
      {/* Header row with X button */}
      <div className="w-full flex flex-none items-center justify-end p-4">
        <ExitButton setToggleDisplay={setToggleDisplay} />
      </div>
      {/* Navigation arrows positioned on each side of the card (desktop only) */}
      <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-[10020]">
        <ProjectButtonLeft action={goback} />
      </div>
      <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-[10020]">
        <ProjectButtonRight action={nextProject} />
      </div>
      {/* Main content row: image (left) and text (right) */}
      <div className="flex flex-1 items-stretch w-full h-auto max-h-full relative">
        {project.content[projectIndex]?.image ? (
          <>
            {/* Image section (desktop) */}
            <div className="hidden md:flex flex-none h-full items-center justify-center w-[50%] max-h-full">
              <ProjectImageContainer
                project={project}
                projectIndex={projectIndex}
              />
            </div>
            {/* Text/content section */}
            <div className="flex items-start py-4 md:items-start justify-center h-auto max-h-full overflow-y-auto flex-col w-full md:w-[50%] justify-center pl-4 md:pl-8">
              <h2 className="font-rubik text-4xl w-[80%] text-left mb-6">
                {project.content[projectIndex].slidetitle
                  ? project.content[projectIndex].slidetitle
                  : null}
              </h2>
              <div className="md:hidden w-[90%] flex items-center justify-center mb-6">
                <ProjectImageContainerMobile
                  project={project}
                  projectIndex={projectIndex}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-[90%] mt-4">
                {project.content?.length && (
                  <div className="md:mt-8 w-full text-sm md:text-2xl paragraph font-work-sans text-stone-800/90">
                    {project.content &&
                      project.content.length > 0 &&
                      project.content[projectIndex]?.content && (
                        <>
                          <PortableText
                            value={project.content[projectIndex].content}
                            components={portableTextComponents}
                          />
                          {project.content[projectIndex].url ? (
                            <a
                              href={project.content[projectIndex].url}
                              className="font-space-mono underline italic font-rubik "
                            >
                              {project.content[projectIndex].urllabel}
                            </a>
                          ) : null}
                        </>
                      )}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          // No image: center text section and make it full width
          <div className="flex items-start py-4 md:items-start justify-center h-auto max-h-full overflow-y-auto flex-col w-full md:w-full justify-center pl-4 md:pl-8">
            <h2 className="font-rubik text-4xl w-[80%] text-left">
              {project.content[projectIndex].slidetitle
                ? project.content[projectIndex].slidetitle
                : null}
            </h2>
            <div className="flex flex-col items-center justify-center w-[90%] ">
              {project.content?.length && (
                <div className="md:mt-8 w-full text-sm md:text-2xl paragraph font-work-sans text-stone-800/90">
                  {project.content &&
                    project.content.length > 0 &&
                    project.content[projectIndex]?.content && (
                      <>
                        <PortableText
                          value={project.content[projectIndex].content}
                          components={portableTextComponents}
                        />
                        {project.content[projectIndex].url ? (
                          <a
                            href={project.content[projectIndex].url}
                            className="font-space-mono underline italic font-rubik "
                          >
                            {project.content[projectIndex].urllabel}
                          </a>
                        ) : null}
                      </>
                    )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Mobile navigation arrows always at the bottom */}
      <div className="w-full flex md:hidden items-center justify-between mt-4 fixed bottom-0 left-0 z-[10010] bg-[#E8D5B0] bg-opacity-95 p-2">
        <ProjectButtonLeft action={goback} />
        <ProjectButtonRight action={nextProject} />
      </div>
      {/* Footer row: navigation (desktop) */}
      <div className="hidden md:w-full md:flex items-center justify-center md:h-[10%] ">
        <ProjectNavigation
          project={project}
          nextProject={nextProject}
          goTothisIndex={goTothisIndex}
          goback={goback}
          projectIndex={circleIndex}
        />
      </div>
    </article>
  );
};

export default ProjectInfoCard;
