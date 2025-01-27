import Image from "next/image";
import {
  FooterBackground,
  FooterContent,
  FooterWrapper,
} from "./footer.styles";
import MagicButton from "../ui/magic-button.ui";
import { socialMedia } from "../../../data";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper
      id='contact'
      className='relative w-full z-10 overflow-hidden'
    >
      {" "}
      {/* Ensure a high z-index */}
      {/* Background Image */}
      <FooterBackground className='absolute inset-0 pointer-events-none'>
        {" "}
        {/* Prevent background from blocking */}
        <Image
          src='/footer-grid.svg'
          fill={true}
          className='w-full h-full overflow-hidden'
          alt='grid'
        />
      </FooterBackground>
      {/* Content */}
      <FooterContent className='relative z-20'>
        {" "}
        {/* Place content above background */}
        {/* Footer Heading */}
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        {/* Footer Text */}
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* Email Button */}
        <Link href='mailto:dward@desean-ward.me' className="mb-8">
          <MagicButton
            title="Let's get in touch"
            icon={<TfiEmail />}
            position='right'
            otherClasses='flex items-center text-xl hover:text-purple py-2 px-4'
          />
        </Link>

      </FooterContent>
      {/* Copyright and Links */}
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center relative z-20'>
        {" "}
        {/* Ensure higher z-index */}
        {/* Copyright */}
        <p className='md:text-base text-sm md:font-normal font-light'>
          &copy;{new Date().getFullYear()} De Sean Ward
        </p>
        {/* Social Links */}
        <div className='flex items-center md:gap-6 gap-3 mt-2 md:mt-0'>
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.socialUrl}
              className='size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-white/30'
              target='_blank'
            >
              <Image
                src={profile.img}
                width={20}
                height={20}
                alt='Social Icon'
                className='cursor-pointer' // Ensure it looks clickable
              />
            </Link>
          ))}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
