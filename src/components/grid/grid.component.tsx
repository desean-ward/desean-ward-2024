import React from "react";
import { GridContainer } from "./grid.styles";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid.ui";
import { gridItems } from "../../../data";
import MagicButton from "../ui/magic-button.ui";
import { IoMdDownload } from "react-icons/io";

const Grid = () => {
  return (
    <GridContainer id='about'>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>

      {/* Resume Download */}
      <div className='flex w-screen max-w-7xl justify-center items-center gap-2 mt-10'>
        <a href='/files/desean-ward.docx' download>
          <MagicButton
            title='Resume'
            icon={<IoMdDownload />}
            position='right'
            otherClasses='text-xl hover:text-purple'
          />
        </a>
      </div>
    </GridContainer>
  );
};

export default Grid;
