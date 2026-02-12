"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";
import Loading from "../(loading)/Loading";
import ProjectDisplay from "./ProjectDisplay";

const ProjectField = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  React.useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Separate highlighted and other projects
  const highlightedProjects = projects.filter((p) => p.highlighted).slice(0, 2);
  const otherProjects = projects.filter((p) => !p.highlighted);

  return (
    <div className="py-10 space-y-4">
      {/* Info text above Featured Projects */}
      <div className="w-full flex justify-end">
        <span className="text-sm md:text-base font-rubik text-[#444] pr-4 pt-2">This site is handcrafted by me (with help) using Next.js, React, Tailwind CSS, and Sanity.io.</span>
      </div>
      {/* Highlighted section - stretched full width */}
      <div className="w-full rounded-lg p-2 flex flex-col">
        {/* Title section - 10% of height */}
        <div className="flex items-center justify-center mt-8 mb-2 py-2">
          <p className="text-center text-[#181818] font-libre-baskerville text-3xl font-bold tracking-wide">Featured Projects</p>
        </div>
        {/* Grid for highlighted project cards */}
        <div className="grid grid-cols-2 gap-2 auto-rows-max justify-center items-center">
          {highlightedProjects.map((project) => (
            <div className="flex justify-center col-span-1" key={project._id}>
              <ProjectCard project={project} highlighted onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>

      {/* Regular projects section */}
      <div className="w-full flex flex-col">
        {/* Title section */}
        <div className="flex items-center justify-center p-2 mb-2">
          <p className="text-center text-[#181818] font-libre-baskerville text-3xl font-bold tracking-wide">Other Projects</p>
        </div>
        {/* Large scalable box for project cards */}
        <div className="w-full rounded-lg p-2 min-h-[800px]">
          <div className="grid grid-cols-1 grid-cols-between xl:grid-cols-3 grid-cols-between-max gap-x-2 gap-y-8 md:gap-x-8 md:gap-y-12 items-start justify-evenly">
            {otherProjects.map((project) => (
              <ProjectCard key={project._id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </div>

      {/* Global Modal Display */}
      {selectedProject && (
        <ProjectDisplay
          project={selectedProject}
          setToggleDisplay={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectField;
