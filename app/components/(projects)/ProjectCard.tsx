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
        {/* Cover image overlay, always visible, more transparent on hover */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-200 pointer-events-none ${toggleFade ? 'opacity-10' : 'opacity-100'} p-4 md:p-8`}
          style={{
            backgroundImage: coverimage ? `url(${coverimage})` : undefined,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundOrigin: "content-box",
            backgroundClip: "content-box",
            zIndex: 1,
          }}
        />
        <div className="w-[100%] flex flex-col items-center h-[100%] justify-center px-2 relative z-10">
          <div className="flex items-center justify-center h-full w-full px-4 py-2">
            <p
              className="text-center font-rubik font-semibold text-[22px] md:text-[28px] leading-tight text-[#181818] opacity-0 group-hover:opacity-100 transition-opacity duration-200 break-words line-clamp-2 z-20"
              style={{ pointerEvents: 'none', whiteSpace: 'normal', wordBreak: 'break-word', textShadow: '0 2px 4px rgb(255, 255, 255), 0 8px 30px rgb(255, 255, 255)' }}
            >
              {excerpt}
            </p>
          </div>
        </div>
      </article>

      {/* Tags container - below the card */}
      {/* Tight gap between card and tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-start w-full gap-2 p-0 mt-2 relative z-0">
          {tags.map((tag, i) => (
            <TagButton key={i} label={tag} url="" />
          ))}
        </div>
      )}
      {/* Extra large gap after tags before next card is now handled in ProjectField */}
    </div>
  );
};

export default ProjectCard;
