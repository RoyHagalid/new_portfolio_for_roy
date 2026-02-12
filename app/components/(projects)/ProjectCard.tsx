"use client";
import React from "react";
import { Project } from "@/types/Project";
import TagButton from "./TagButton";

type Props = {
  project: Project;
  highlighted?: boolean;
  onClick?: () => void;
};

const ProjectCard = ({ project, highlighted = false, onClick }: Props) => {
  const [toggleFade, setToggleFade] = React.useState(false);
  const { _id, title, excerpt, coverimage, tags } = project;

  return (
    <div className={`flex flex-col p-2 relative ${highlighted ? 'w-[520px] h-[340px] md:w-[620px] md:h-[400px]' : 'w-[402px] h-[143px] md:w-[441px] md:h-[271px]'}`}>
      <article
        key={_id}
        className={`group py-2 custom-mouse-pointer px-1 flex flex-col items-center justify-center bg-[#F3E9D6] bg-opacity-20 inner-shadow-image-card bg-fixed bg-center bg-no-repeat bg-cover relative z-10 transition-transform duration-300 w-full h-full min-h-[143px] md:min-h-[271px]`}
        onMouseEnter={() => setToggleFade(true)}
        onMouseLeave={() => setToggleFade(false)}
        onClick={onClick}
      >
        {/* Cover image overlay, appears on hover */}
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-200 pointer-events-none"
          style={{
            opacity: toggleFade ? 0.35 : 0,
            backgroundImage: coverimage ? `url(${coverimage})` : undefined,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "80%",
            zIndex: 1,
          }}
        />
        <div className="w-[100%] flex flex-col items-center h-[100%] justify-center px-2 relative z-10 transition-opacity duration-200 group-hover:opacity-0">
          <h3 className=" text-center font-semibold font-libre-baskerville">{title}</h3>
          <p className="line-clamp-3 text-[16px] font-light md:font-normal md:text-[22px] flex items-center text-center justify-center leading-6 text-[#181818] font-rubik">
            {excerpt}
          </p>
        </div>
      </article>

      {/* Tags container - below the card */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-start w-full gap-2 p-0 mt-2 relative z-0">
          {tags.map((tag, i) => (
            <TagButton key={i} label={tag} url="" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
