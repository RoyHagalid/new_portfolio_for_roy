import React from "react";
import ProjectNavigation from "../(project pagination)/ProjectNavigation";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href || value} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};
import ProjectImageContainer from "./ProjectImageContainer";
import ProjectImageContainerMobile from "./ProjectImageContainerMobile";
import ExitButton from "./ExitButton";

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
    <article className="bg-[#E8D5B0] bg-svg-pattern-stain bg-center bg-no-repeat bg-contain rounded-2xl border-[1px] overflow-hidden shadow-project-card relative z-[10000] w-full max-w-[95vw] md:max-w-[70vw] max-h-[90vh] flex flex-col justify-between">
      {/* Header row with X button */}
      <div className="w-full flex flex-none items-center justify-end p-4">
        <ExitButton setToggleDisplay={setToggleDisplay} />
      </div>
      {/* Main content row: image (left) and text (right) */}
      <div className="flex flex-1 items-stretch w-full h-auto max-h-full">
        {/* Image section (desktop) */}
        <div className="hidden md:flex flex-none h-full items-center justify-center w-[50%] max-h-full">
          <ProjectImageContainer
            project={project}
            projectIndex={projectIndex}
          />
        </div>
        {/* Text/content section */}
        <div className="flex items-center py-4 md:items-center justify-center h-auto max-h-full overflow-y-auto flex-col w-full md:w-[50%] justify-center">
          <h2 className=" font-rubik text-4xl w-[80%]">
            {project.content[projectIndex].slidetitle
              ? project.content[projectIndex].slidetitle
              : null}
          </h2>
          <div className="md:hidden w-[90%] flex items-center justify-center">
            <ProjectImageContainerMobile
              project={project}
              projectIndex={projectIndex}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[90%] ">
            <div className="w-full flex  md:hidden items-center justify-center">
              <ProjectNavigation
                project={project}
                nextProject={nextProject}
                goTothisIndex={goTothisIndex}
                goback={goback}
                projectIndex={circleIndex}
              />
            </div>
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
