import tw from "tailwind-styled-components";

export const ProjectsWrapper = tw.section`
    py-20 
    mt-24
`;

export const ProjectsContainer = tw.div`
    flex 
    flex-wrap
    items-center 
    justify-center 
    p-4 
    gap-x-24 
    gap-y-8 
`;

export const ProjectCard = tw.div`
    sm:h-[41rem] 
    lg:min-h-[32.5rem]
    h-[32rem]  
    flex
    items-center 
    justify-center 
    sm:w-[570px] 
    w-[80vw]
`;

export const ImageContainer = tw.div`
    relative 
    flex 
    items-center 
    justify-center 
    sm:w-[570px] 
    w-[80vw] 
    overflow-hidden 
    sm:h-[40vh] 
    h-[30vh] 
    mb-10
`;
export const ImageContainerBg = tw.div`
    relative 
    w-full 
    h-full 
    overflow-hidden 
    lg:rounded-3xl
`;

export const ProjectTitle = tw.h1`
    font-bold 
    lg:text-2xl 
    md:text-xl 
    text-base 
    line-clamp-1
`;

export const ProjectDescription = tw.p`
    lg:text-xl 
    lg:font-normal 
    font-light 
    text-sm 
    line-clamp-2
`;
export const CardFooter = tw.div`
    flex 
    items-center 
    justify-between 
    mt-7 
    mb-3
    z-50
`;

export const IconsContainer = tw.div`
    flex 
    items-center
`;

export const Icon = tw.div`
    border 
    border-white/[0.3] 
    rounded-full 
    bg-black 
    lg:w-16 
    lg:h-16
    w-8 
    h-8 
    flex 
    justify-center 
    items-center  
`;

export const WebsitesWrapper = tw.div`
    relative 
    text-2xl 
    text-white 
    font-bold 
    inline-block 
    py-2 
    px-4
`;

export const WebsitesContainer = tw.div`
    flex 
    justify-center 
    items-center 
    gap-4
`;

export const GitHubLink = tw.a`
    flex 
    items-center 
    hover:text-purple
`;

export const GitHubLinkText = tw.p`
    flex 
    lg:text-xl 
    md:text-xs
    text-sm 
`;

export const DemoLink = tw.a`
    flex 
    items-center 
    text-purple
    hover:text-white
`;

export const DemoLinkText = tw.p`
    flex 
    lg:text-xl 
    md:text-xs 
    text-sm 
`;
