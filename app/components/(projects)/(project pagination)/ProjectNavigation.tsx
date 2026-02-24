import React from "react";
import ProjectButtonLeft from "./ProjectButtonLeft";
import ProjectCircle from "./ProjectCircle";
import ProjectButtonRight from "./ProjectButtonRight";
import { Project } from "@/types/Project";

type Props = {
  projectIndex: number;
  project: Project;
  goback: () => void;
  nextProject: () => void;
  goTothisIndex: (index: number) => void;
  hideIndicators?: boolean;
};

const ProjectNavigation = ({
  projectIndex,
  project,
  goback,
  nextProject,
  goTothisIndex,
  hideIndicators = false,
}: Props) => {
  return (
    <div className="text-white md:my-3 md:py-3 w-[100%] md:w-[43%] flex z-[10000] md:h-[10%]  items-center justify-evenly">
      {!hideIndicators && project.content?.length && (
        <>
          {Array.from({ length: Math.min(project.content.length, 10) }).map(
            (_, i) => (
              <ProjectCircle
                action={goTothisIndex}
                key={i}
                index={i}
                projectIndex={projectIndex}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default ProjectNavigation;
