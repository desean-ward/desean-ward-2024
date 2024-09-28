"use client";
import tw from "tailwind-styled-components";
import { Button } from "../ui/moving-borders.ui";

export const ExperienceWrapper = tw.section`
    px-4
`;

export const ExperienceContainer = tw.div`
   mt-12 
   grid 
   lg:grid-cols-4 
   grid-cols-1 
   gap-10 
`;

export const ExperienceCard = tw(Button)`
    flex-1 
    text-white 
    border-neutrual-200 
    dark:border-slate-800
`;

export const CardContainer = tw.div`
    flex 
    lg:flex-row 
    flex-col 
    items-center 
    p-3 py-6 
    md:p-5 
    lg:p-10 
    gap-2
`;
