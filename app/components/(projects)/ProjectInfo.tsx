"use client";
import React, { useEffect, useState } from "react";
import { Project } from "@/types/Project";
import Loading from "../(loading)/Loading";
import ProjectInfoCard from "./(projectinfocard)/ProjectInfoCard";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const useKeyDown = (handler: (event: KeyboardEvent) => void, deps: React.DependencyList = [])=> {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => handler(event);
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, Array.isArray(deps) ? deps : [])
}

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);


  useKeyDown((e) => {
    if (e.key === "Escape") {
      setToggleDisplay(false);
    }
  })

  if (!project || !project.content) return <Loading />;

  const totalSlides = project.content.length;

  // Use projectIndex directly for slide indicator highlighting
  const goback = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    }
  };

  const nextProject = () => {

    if (projectIndex < totalSlides - 1) {
      setProjectIndex(projectIndex + 1);
    }
  };

  const goTothisIndex = (index: number) => {
    setProjectIndex(index);
  };

  const circleIndex = projectIndex;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center w-screen h-screen">
      {/* Overlay as background layer */}
      <div
        className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[10000]"
        style={{ pointerEvents: 'auto' }}
        onClick={() => setToggleDisplay(false)}
      ></div>
      {/* Modal window centered, only content size */}
      <div
        className="relative z-[10001] flex items-center justify-center w-auto max-w-[95vw] md:max-w-[70vw]"
        onClick={e => e.stopPropagation()}
        style={{ pointerEvents: 'auto' }}
      >
        <ProjectInfoCard
          setToggleDisplay={setToggleDisplay}
          goTothisIndex={goTothisIndex}
          nextProject={nextProject}
          circleIndex={circleIndex}
          project={project}
          goback={goback}
          projectIndex={projectIndex}
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
