import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../ui/magic-button.ui";
import { Spotlight } from "../ui/spotlight.ui";
import {
  AnimatedHeading,
  ContentContainer,
  ContentWrapper,
  GridContainer,
  GridGradient,
  HeroWrapper,
  Intro,
  SubHeading,
} from "./hero.styles";
import { GrProjects } from "react-icons/gr";

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        {/* White Spotlight */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill='white'" />

        {/* Purple Spotlight */}
        <Spotlight className="-top-10left-full h-[80vh] w-[50vw] fill='purple'" />

        {/* Blue Spotlight */}
        <Spotlight className="top-40 left-10 fill='blue'" />
      </div>

      {/* Grid */}
      <GridContainer>
        {/* Radial gradient for the container to give a faded look */}
        <GridGradient />
      </GridContainer>

      <ContentWrapper>
        <ContentContainer>
          {/* Subheading */}
          <SubHeading>Dynamic Web Magic with Next.js</SubHeading>

          {/* Animated Text */}
          <AnimatedHeading words='Transforming Concepts Into Seamless User Experiences' />

          {/* Intro */}
          <Intro>
            Hi, I&apos;m <span className='text-purple'>De Sean</span>, a Next.js
            Full Stack Software Engineer
          </Intro>

          {/* Show My Work Button */}
          <a href='#projects'>
            <MagicButton
              title='View My Projects'
              icon={<GrProjects />}
              position='right'
              otherClasses='flex items-center text-xl hover:text-purple'
            />
          </a>
        </ContentContainer>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
