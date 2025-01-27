import Image from "next/image";
import { companies, testimonials } from "../../../data";
import { InfiniteMovingCards } from "../ui/infinite-cards.ui";
import { ColleaguesContainer, ColleaguesWrapper } from "./colleagues.styles";
import Link from "next/link";

const Colleagues = () => {
  return (
    <ColleaguesWrapper id='testimonials'>
      {/* Heading */}
      <h1 className='heading mb-8'>
        Kind words from <span className='text-purple'>my colleagues</span>
      </h1>

      {/* Testimonial Cards */}
      <ColleaguesContainer>
        <InfiniteMovingCards
          items={testimonials}
          direction='left'
          speed='slow'
        />
        {/* Companies */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10'>
          {companies.map(({ id, name, img, website }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <div key={id} className='flex md:max-w-60 gap-2'>
                {/* Logo */}
                <Link href={website} target='_blank'>
                  <Image
                    src={img}
                    alt={name}
                    className='md:w-full w-full'
                    width={150}
                    height={45}
                  />{" "}
                </Link>
                {/* Logo Name */}
                {/* <Image
                  src={nameImg}
                  alt={name}
                  className='md:w-24 w-20'
                  width={100}
                  height={100}
                />{" "}  */}
              </div>
            </div>
          ))}
        </div>{" "}
      </ColleaguesContainer>
    </ColleaguesWrapper>
  );
};

export default Colleagues;
