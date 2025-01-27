'use client'
import Image from "next/image";
import { workExperience } from "../../../data";
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceCard,
  CardContainer,
} from "./experience.styles";
import MagicButton from "../ui/magic-button.ui";
import { IoMdDownload } from "react-icons/io";
import { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
      if (typeof document === "undefined") return;
    }, []);
  
  return (
    <ExperienceWrapper>
      {/* Heading */}
      <h1 className='heading'>
        My <span className='text-purple'>experience</span>
      </h1>

      {/* Grid Container */}
      <ExperienceContainer>
        {workExperience.map((card) => (
          <ExperienceCard
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
          >
            {/* Card */}
            <CardContainer>
              <Image
                src={card.thumbnail}
                width={100}
                height={100}
                className='lg:w-32 md:w-20 w-16'
                alt='img'
              />

              {/* Text */}
              <div className='lg:ms-5'>
                {/* Job Title */}
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>

                {/* Job Description */}
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>
              </div>
            </CardContainer>
          </ExperienceCard>
        ))}

        {/* Resume Download */}
        <div className='flex md:w-screen max-w-7xl justify-center items-center gap-2'>
          <a href='/files/desean-ward.docx' download>
            <MagicButton
              title='Resume'
              icon={<IoMdDownload />}
              position='right'
              otherClasses='text-xl hover:text-purple'
            />
          </a>
        </div>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
