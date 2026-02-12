"use client";
import React from "react";
import { createPortal } from "react-dom";
import { Project } from "@/types/Project";
import ProjectInfo from "./ProjectInfo";

type Props = {
  setToggleDisplay: (value: boolean) => void;
  project: Project;
};

const ProjectDisplay = ({ setToggleDisplay, project }: Props) => {
  if (typeof window === "undefined") return null;
  return createPortal(
    <div className="z-[200] flex items-center justify-center fixed left-0 top-0 w-screen h-screen">
      <ProjectInfo project={project} setToggleDisplay={setToggleDisplay} />
    </div>,
    document.body
  );
};

export default ProjectDisplay;
