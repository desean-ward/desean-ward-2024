import { testimonials } from "../../../data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { ColleguesContainer, ColleguesWrapper } from "./colleagues.styles";

const Collegues = () => {
  return (
    <ColleguesWrapper id='Collegues'>
      {/* Heading */}
      <h1 className='heading'>
        Kind words from <span className='text-purple'>my collegues</span>
      </h1>

      {/* Testimonial Cards */}
      <ColleguesContainer>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </ColleguesContainer>
    </ColleguesWrapper>
  );
};

export default Collegues;
