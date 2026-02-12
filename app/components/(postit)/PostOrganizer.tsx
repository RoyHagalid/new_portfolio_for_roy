"use client";
import React, { useEffect, useState } from "react";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";
import UniversalNote from "./(postitnotes)/UniversalNote";

type Props = {
  index: number;
  siteData: SiteData;
  isDeleting: boolean
};

const PostOrganizer = ({ index, siteData, isDeleting }: Props) => {

  const [randomNumber, setRandomNumber] = useState(-1);
  const [label, setLabel] = useState("");



  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4) + 1);
    if (siteData.quotes) {
      setLabel(siteData.quotes[Math.floor(Math.random() * siteData.quotes.length) + 0]);
    }
  }, [siteData.quotes]);

  if (!siteData) {
    return <Loading />
  }

  return (
    <>
      {randomNumber === 1 ? <UniversalNote color="#FFAA75" label={label} index={index} isCrumbling={isDeleting}/> : <></>}
      {randomNumber === 2 ? <UniversalNote color="#5A4B89" label={label} index={index} isCrumbling={isDeleting}/> : <></>}
      {randomNumber === 3 ? <UniversalNote color="#6A894B" label={label} index={index} isCrumbling={isDeleting}/> : <></>}
      {randomNumber === 4 ? <UniversalNote color="#F05D7E" label={label} index={index} isCrumbling={isDeleting}/> : <></>}
    </>
  );
};

export default PostOrganizer;
