"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../../../data";
import { PinContainer } from "../ui/3d-pin.ui";
import {
  ProjectTitle,
  ImageContainer,
  ImageContainerBg,
  ProjectCard,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectDescription,
  CardFooter,
  Icon,
  IconsContainer,
  WebsitesWrapper,
  WebsitesContainer,
  GitHubLink,
  GitHubLinkText,
  DemoLink,
  DemoLinkText,
} from "./projects.styles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import MagicButton from "../ui/magic-button.ui";
import { IoMdDownload } from "react-icons/io";

const Projects = () => {
  const [gitClicked, setGitClicked] = useState(false);

  return (
    <ProjectsWrapper id='projects'>
      {/* Heading */}
      <h1 className='heading'>
        A small selection of{" "}
        <span className='text-purple'>recent projects</span>
      </h1>

      {/* Projects */}
      <ProjectsContainer>
        {projects.map(({ id, title, des, img, link, iconLists, gitUrl }) => (
          <ProjectCard key={id}>
            {/* Pin Popup on Hover */}
            <PinContainer
              title='Live Site'
              href={`${gitClicked ? gitUrl : link}`}
              className='text-lg'
            >
              {/* Card Image */}
              <ImageContainer>
                <ImageContainerBg style={{ backgroundColor: "#13162D" }}>
                  <Image src='/bg.png' fill={true} alt='bg-img' />
                </ImageContainerBg>
                <Image
                  src={img}
                  width={464}
                  height={300}
                  alt={title}
                  className="absolute -bottom-7 rotate-[2deg] h-[300px] "
                />
              </ImageContainer>

              {/* Project Title */}
              <ProjectTitle>{title}</ProjectTitle>

              {/* Project Description */}
              <ProjectDescription>{des}</ProjectDescription>

              <>
                {/* Card Footer */}
                <CardFooter>
                  {/* Icon List */}
                  <IconsContainer>
                    {iconLists?.map((icon: string, index: number) => (
                      <Icon
                        key={index}
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          width={40}
                          height={40}
                          className='p-2'
                          alt={icon}
                        />
                      </Icon>
                    ))}
                  </IconsContainer>

                  {/* Links to Websites */}
                  <WebsitesWrapper>
                    <WebsitesContainer>
                      {/* GitHub */}
                      <GitHubLink
                        onMouseOver={() => setGitClicked(true)}
                        onMouseOut={() => setGitClicked(false)}
                      >
                        <GitHubLinkText href={gitUrl} target='_blank'>
                          GitHub
                        </GitHubLinkText>

                        {/* New Window Arrow */}
                        <FaArrowUpRightFromSquare className='ms-3' />
                      </GitHubLink>{" "}
                      | {/* Demo */}
                      <DemoLink
                        onMouseOver={() => setGitClicked(false)}
                        href={link}
                        target='_blank'
                      >
                        <DemoLinkText>Demo</DemoLinkText>

                        {/* New Window Arrow */}
                        <FaArrowUpRightFromSquare className='ms-3' />
                      </DemoLink>
                    </WebsitesContainer>
                  </WebsitesWrapper>
                </CardFooter>
              </>
            </PinContainer>
          </ProjectCard>
        ))}

        {/* Resume Download */}
        <div className='flex w-screen max-w-7xl justify-center items-center gap-2'>
          <a href='/files/desean-ward.docx' download>
            <MagicButton
              title='Resume'
              icon={<IoMdDownload />}
              position='right'
              otherClasses='text-xl hover:text-purple'
            />
          </a>
        </div>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
