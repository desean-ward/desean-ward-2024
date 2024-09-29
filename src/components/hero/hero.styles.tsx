'use client'
import tw from "tailwind-styled-components";
import { TextGenerateEffect } from "../ui/text-generate-effect.ui";

export const HeroWrapper = tw.div`
    pb-20 
    pt-36
`;

export const GridContainer = tw.div`
    h-screen 
    w-full 
    dark:bg-black-100 
    bg-white  
    dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
    flex 
    items-center 
    justify-center 
    absolute 
    left-0 
    top-0
`;

export const GridGradient = tw.div`
    absolute 
    pointer-events-none 
    inset-0 
    flex 
    items-center 
    justify-center 
    dark:bg-black-100 
    bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
`;

export const ContentWrapper = tw.div`
    flex 
    justify-center 
    relative 
    my-20 
    z-10'    
`;

export const ContentContainer = tw.div`
    max-w-[89vw] 
    md:max-w-2xl 
    lg:max-w-[60vw] 
    flex flex-col 
    items-center 
    justify-center
`

export const SubHeading = tw.h2`
    uppercase 
    tracking-wider 
    text-xs 
    text-center 
    text-blue-100 
    max-w-80
`

export const AnimatedHeading = tw(TextGenerateEffect)`
    text-center 
    text-[40px] 
    md:text-5xl 
    lg:text-6xl
`

export const Intro = tw.p`
    text-center 
    md:tracking-wider 
    mb-4 
    text-sm 
    md:text-lg 
    lg:text-2xl
`
