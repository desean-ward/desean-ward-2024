import Image from "next/image";
import { companies, testimonials } from "../../../data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { ColleguesContainer, ColleguesWrapper } from "./colleagues.styles";

const Collegues = () => {
  return (
    <ColleguesWrapper id='Collegues'>
      {/* Heading */}
      <h1 className='heading'>
        Kind words from <span className='text-purple'>my collegues</span>
      </h1>
      ``
      {/* Testimonial Cards */}
      <ColleguesContainer>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
        {/* Companies */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10'>
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <div key={id} className='flex md:max-w-60 gap-2'>
                {/* Logo */}
                <Image
                  src={img}
                  alt={name}
                  className='md:w-10 w-5'
                  width={100}
                  height={100}
                />{" "}
                {/* Logo Name */}
                <Image
                  src={nameImg}
                  alt={name}
                  className='md:w-24 w-20'
                  width={100}
                  height={100}
                />{" "}
              </div>
            </div>
          ))}
        </div>{" "}
      </ColleguesContainer>
    </ColleguesWrapper>
  );
};

export default Collegues;
